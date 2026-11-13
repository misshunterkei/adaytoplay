const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function parisDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris", weekday: "long", day: "2-digit", month: "long"
  }).formatToParts(date);
  return Object.fromEntries(parts.map(part => [part.type, part.value]));
}

function updateDate() {
  const date = parisDateParts();
  $("#date-weekday").textContent = date.weekday.toLocaleUpperCase("fr-FR");
  $("#date-day").textContent = date.day;
  $("#date-month").textContent = date.month.toLocaleUpperCase("fr-FR");
}

function getParisCalendarKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris", month: "2-digit", day: "2-digit"
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return `${values.month}-${values.day}`;
}

function getParisISODate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

// Sélection déterministe : une même date donne la même anecdote à tous les joueurs,
// même après actualisation. Le tirage peut être différent l'année suivante.
function getDailyAnecdoteForDate(anecdotes, date = new Date()) {
  const key = getParisCalendarKey(date);
  const candidates = anecdotes?.[key];
  if (!Array.isArray(candidates) || candidates.length === 0) return null;
  if (candidates.length === 1) return candidates[0];

  const dateSeed = getParisISODate(date);
  let hash = 2166136261;
  for (let i = 0; i < dateSeed.length; i++) {
    hash ^= dateSeed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const index = (hash >>> 0) % candidates.length;
  return candidates[index];
}

function renderDailyAnecdote(date = new Date()) {
  const anecdote = getDailyAnecdoteForDate(window.ADP_ANECDOTES, date);
  const dateElement = $("#anecdote-date");
  const textElement = $("#anecdote-text");
  if (!dateElement || !textElement) return;

  const parts = parisDateParts(date);
  const day = Number(parts.day);
  const todayLabel = `${day === 1 ? "1er" : day} ${parts.month}`;

  if (!anecdote) {
    dateElement.textContent = todayLabel;
    textElement.textContent = "L’anecdote de cette journée sera bientôt disponible.";
    return;
  }

  dateElement.textContent = anecdote.year ? `${todayLabel} ${anecdote.year}` : todayLabel;
  textElement.textContent = anecdote.text;
}

function applyTheme(theme) {
  document.body.classList.toggle("dark-theme", theme === "dark");
  $("#theme-icon").innerHTML = theme === "dark"
    ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>'
    : '<path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.7 8.7 0 1 0 20.2 15.2Z"/>';
  $("#theme-toggle").setAttribute("aria-label",
    theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre");
  try { localStorage.setItem("adp-theme", theme); } catch (_) {}
}

function navigate(page) {
  const target = $(`#page-${page}`);
  if (!target) return;
  $$(".page-view").forEach(view => view.classList.add("hidden"));
  target.classList.remove("hidden");
  $$(".nav-link").forEach(link => {
    const active = link.dataset.page === (page === "crossword" ? "jeux" : page);
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleRoute() {
  const route = location.hash.replace("#", "") || "accueil";
  const allowed = ["accueil", "jeux", "stats", "apropos", "crossword"];
  navigate(allowed.includes(route) ? route : "accueil");
}

function previousDate(dateString, offset) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day - offset));
  return date.toISOString().slice(0, 10);
}

function renderStreak() {
  let played = [];
  try { played = JSON.parse(localStorage.getItem("adp-played-days") || "[]"); } catch (_) {}
  const today = getParisISODate();
  let streak = 0;
  let cursor = today;
  while (played.includes(cursor)) { streak++; cursor = previousDate(cursor, 1); }
  $("#streak-count").textContent = streak;

  const labels = [];
  for (let offset = 6; offset >= 0; offset--) {
    const dateString = previousDate(today, offset);
    const date = new Date(`${dateString}T12:00:00Z`);
    const label = new Intl.DateTimeFormat("fr-FR", { timeZone: "UTC", weekday: "short" })
      .format(date).replace(".", "");
    labels.push({ label, done: played.includes(dateString) });
  }
  $("#streak-days").innerHTML = labels.map(day =>
    `<div class="streak-day"><span class="streak-dot${day.done ? " done" : ""}"></span><span>${day.label}</span></div>`
  ).join("");
}

$("#theme-toggle").addEventListener("click", () => {
  applyTheme(document.body.classList.contains("dark-theme") ? "light" : "dark");
});

window.addEventListener("hashchange", handleRoute);

let activeCrossword = null;
let crosswordLives = 3;

function renderCrossword() {
  const board = $("#crossword-board");
  const across = $("#clues-across");
  const down = $("#clues-down");
  if (!activeCrossword || !board || !across || !down) return;

  const starts = new Map();
  activeCrossword.words.forEach(word => starts.set(word.row + "," + word.col, word.number));
  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${activeCrossword.size}, minmax(0, 1fr))`;

  activeCrossword.cells.forEach((row, r) => row.forEach((cell, c) => {
    const square = document.createElement("div");
    square.className = "crossword-cell" + (cell ? " is-letter" : " is-block");
    if (cell) {
      const number = starts.get(r + "," + c);
      if (number) {
        const label = document.createElement("span");
        label.className = "crossword-number";
        label.textContent = number;
        square.appendChild(label);
      }
      const input = document.createElement("input");
      input.maxLength = 1;
      input.autocomplete = "off";
      input.autocapitalize = "characters";
      input.dataset.row = r;
      input.dataset.col = c;
      input.setAttribute("aria-label", `Ligne ${r + 1}, colonne ${c + 1}`);
      input.addEventListener("input", () => {
        input.value = window.ADP_CROSSWORD_GENERATOR.normalize(input.value).slice(-1);
        input.classList.remove("is-wrong");
        if (input.value) {
          const next = board.querySelector(`input[data-row="${r}"][data-col="${c + 1}"]`);
          if (next) next.focus();
        }
      });
      input.addEventListener("keydown", event => {
        if (event.key === "Backspace" && !input.value) {
          const previous = board.querySelector(`input[data-row="${r}"][data-col="${c - 1}"]`);
          if (previous) previous.focus();
        }
      });
      square.appendChild(input);
    }
    board.appendChild(square);
  }));

  const addClues = (words, target) => {
    target.innerHTML = "";
    words.filter(word => word.dir === (target === across ? "across" : "down"))
      .forEach(word => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${word.number}.</strong> ${word.clue}`;
        target.appendChild(li);
      });
  };
  addClues(activeCrossword.words, across);
  addClues(activeCrossword.words, down);
  $("#crossword-lives").textContent = crosswordLives;
  $("#crossword-feedback").textContent = "";
}

function startCrossword() {
  try {
    activeCrossword = window.ADP_CROSSWORD_GENERATOR.buildGrid(window.ADP_GAME_OF_THRONES_CHARACTERS);
    crosswordLives = 3;
    renderCrossword();
    $(".difficulty-grid").classList.add("hidden");
    $(".demo-notice").classList.add("hidden");
    $("#crossword-game").classList.remove("hidden");
    $("#crossword-game").scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    $("#crossword-feedback").textContent = error.message;
    $("#crossword-game").classList.remove("hidden");
  }
}

$("[data-difficulty]").forEach(button => {
  button.addEventListener("click", () => {
    if (button.dataset.difficulty === "moyen") startCrossword();
    else alert("Cette grille sera disponible dans une prochaine étape. Pour le moment, seul le thème Game of Thrones est en test.");
  });
});

$("#crossword-back").addEventListener("click", () => {
  $("#crossword-game").classList.add("hidden");
  $(".difficulty-grid").classList.remove("hidden");
  $(".demo-notice").classList.remove("hidden");
});

$("#crossword-check").addEventListener("click", () => {
  if (!activeCrossword) return;
  let errors = 0;
  let filled = 0;
  activeCrossword.words.forEach(word => {
    for (let i = 0; i < word.answer.length; i++) {
      const row = word.row + (word.dir === "down" ? i : 0);
      const col = word.col + (word.dir === "across" ? i : 0);
      const input = $(`#crossword-board input[data-row="${row}"][data-col="${col}"]`);
      if (!input.value) errors++;
      else {
        filled++;
        if (input.value !== word.answer[i]) {
          errors++;
          input.classList.add("is-wrong");
        } else input.classList.remove("is-wrong");
      }
    }
  });
  if (errors === 0) {
    $("#crossword-feedback").textContent = "Bravo ! Toutes les réponses sont correctes.";
    $("#crossword-feedback").classList.add("is-success");
    return;
  }
  crosswordLives--;
  $("#crossword-lives").textContent = crosswordLives;
  $("#crossword-feedback").classList.remove("is-success");
  if (crosswordLives <= 0) {
    $("#crossword-feedback").textContent = "Partie terminée. La solution sera révélée dans une prochaine version.";
    $("#crossword-check").disabled = true;
  } else {
    $("#crossword-feedback").textContent = `${errors} case(s) à corriger. Il te reste ${crosswordLives} vérification(s).`;
  }
});

let preferredTheme = "light";
try { preferredTheme = localStorage.getItem("adp-theme") || "light"; } catch (_) {}
applyTheme(preferredTheme);
updateDate();
renderDailyAnecdote();
renderStreak();
handleRoute();

// Vérifie régulièrement la date de Paris pour actualiser l’anecdote à minuit,
// même si la page reste ouverte dans un onglet.
let lastParisDate = getParisISODate();
window.setInterval(() => {
  const currentParisDate = getParisISODate();
  if (currentParisDate !== lastParisDate) {
    lastParisDate = currentParisDate;
    updateDate();
    renderDailyAnecdote();
    renderStreak();
  }
}, 60_000);

window.addEventListener("focus", () => {
  const currentParisDate = getParisISODate();
  if (currentParisDate !== lastParisDate) {
    lastParisDate = currentParisDate;
    updateDate();
    renderDailyAnecdote();
    renderStreak();
  }
});
