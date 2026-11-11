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

  dateElement.textContent = `${todayLabel} ${anecdote.year}`;
  textElement.textContent = anecdote.text;
}

function applyTheme(theme) {
  document.body.classList.toggle("dark-theme", theme === "dark");
  $("#theme-icon").textContent = theme === "dark" ? "☀" : "☾";
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

$$("[data-difficulty]").forEach(button => {
  button.addEventListener("click", () => {
    const difficulty = button.dataset.difficulty;
    // Le choix de difficulté sera verrouillé ici lorsque le moteur de partie sera branché.
    alert(`La grille « ${difficulty} » sera prochainement disponible. Cette étape sert actuellement à valider la navigation.`);
  });
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
