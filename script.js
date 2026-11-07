
/* =========================================
   A DAY TO PLAY
   Script principal
========================================= */

console.log("A Day to Play est prêt !");


/* -----------------------------------------
   DATE : HEURE DE PARIS
----------------------------------------- */

function getParisDate() {
    const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Europe/Paris",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).formatToParts(new Date());

    const values = {};
    parts.forEach(part => {
        values[part.type] = part.value;
    });

    return `${values.year}-${values.month}-${values.day}`;
}

function updateDate() {
    const date = new Date();

    const weekday = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Europe/Paris",
        weekday: "long"
    }).format(date);

    const day = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Europe/Paris",
        day: "2-digit"
    }).format(date);

    const month = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Europe/Paris",
        month: "long"
    }).format(date);

    const weekdayElement = document.getElementById("date-weekday");
    const dayElement = document.getElementById("date-day");
    const monthElement = document.getElementById("date-month");

    if (weekdayElement) {
        weekdayElement.textContent = weekday.toLocaleUpperCase("fr-FR");
    }

    if (dayElement) {
        dayElement.textContent = day;
    }

    if (monthElement) {
        monthElement.textContent = month.toLocaleUpperCase("fr-FR");
    }
}


/* -----------------------------------------
   THÈME CLAIR / SOMBRE
----------------------------------------- */

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function applyTheme(theme) {
    document.body.classList.toggle("dark-theme", theme === "dark");

    if (themeIcon) {
        themeIcon.textContent = theme === "dark" ? "☀" : "☾";
    }

    localStorage.setItem("adp-theme", theme);
}

const savedTheme = localStorage.getItem("adp-theme") || "light";
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.contains("dark-theme");
        applyTheme(isDark ? "light" : "dark");
    });
}


/* -----------------------------------------
   SÉRIE QUOTIDIENNE
----------------------------------------- */

function getPlayedDays() {
    try {
        return JSON.parse(localStorage.getItem("adp-played-days")) || [];
    } catch {
        return [];
    }
}

function markTodayAsPlayed() {
    const today = getParisDate();
    const playedDays = getPlayedDays();

    if (!playedDays.includes(today)) {
        playedDays.push(today);
        localStorage.setItem("adp-played-days", JSON.stringify(playedDays));
    }
}

function getPreviousDate(dateString, numberOfDays) {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));

    date.setUTCDate(date.getUTCDate() - numberOfDays);

    return date.toISOString().slice(0, 10);
}

function renderStreak() {
    const daysContainer = document.getElementById("streak-days");
    const countElement = document.getElementById("streak-count");

    if (!daysContainer || !countElement) return;

    const playedDays = getPlayedDays();
    const today = getParisDate();

    let streak = 0;
    let currentDate = today;

    while (playedDays.includes(currentDate)) {
        streak++;
        currentDate = getPreviousDate(currentDate, 1);
    }

    countElement.textContent = streak;
    daysContainer.innerHTML = "";

    const weekdayFormatter = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "UTC",
        weekday: "short"
    });

    for (let i = 6; i >= 0; i--) {
        const dateString = getPreviousDate(today, i);
        const [year, month, day] = dateString.split("-").map(Number);
        const date = new Date(Date.UTC(year, month - 1, day));

        const dayName = weekdayFormatter.format(date).replace(".", "");
        const completed = playedDays.includes(dateString);

        const dayBlock = document.createElement("div");
        dayBlock.className = "streak-day";

        const circle = document.createElement("span");
        circle.className = "streak-circle";

        if (completed) {
            circle.classList.add("completed");
        }

        const label = document.createElement("span");
        label.textContent = dayName;

        dayBlock.appendChild(circle);
        dayBlock.appendChild(label);
        daysContainer.appendChild(dayBlock);
    }
}


/* -----------------------------------------
   DÉFI DU PETIT BAC
   BASE DE DÉMONSTRATION
----------------------------------------- */

const dailyChallenge = {
    letter: "C",
    categories: [
        "Pays",
        "Ville",
        "Animal",
        "Film",
        "Jeu vidéo",
        "Fruit ou légume",
        "Objet",
        "Métier",
        "Sport",
        "Mythologie"
    ]
};

const acceptedAnswers = {
    "Pays": ["canada", "chine", "chili", "colombie", "cuba", "cambodge", "cameroun", "croatie", "chypre", "chad", "comores", "congo", "cap vert", "costa rica", "corée du sud", "corée du nord"],
    "Ville": ["cannes", "caen", "clermont ferrand", "copenhague", "casablanca", "caracas", "chicago", "cairo", "caire", "colmar", "calais", "cotonou", "canberra"],
    "Animal": ["chat", "chien", "cheval", "crocodile", "canard", "cochon", "chèvre", "chameau", "cobaye", "cigogne", "coyote", "castor", "caméléon"],
    "Film": ["coco", "cars", "creed", "casino royale", "coraline", "citizen kane", "gladiator", "clueless", "charlie et la chocolaterie"],
    "Jeu vidéo": ["celeste", "counter strike", "civilization", "cuphead", "cyberpunk 2077", "crash bandicoot", "call of duty", "control", "cult of the lamb"],
    "Fruit ou légume": ["carotte", "courgette", "citron", "cerise", "clémentine", "concombre", "chou", "céleri", "cassis", "coing"],
    "Objet": ["chaise", "couteau", "cuillère", "cahier", "cartable", "casserole", "cadenas", "coussin", "ciseaux", "clé", "cadre"],
    "Métier": ["cuisinier", "coiffeur", "comptable", "chauffeur", "chirurgien", "charpentier", "couturier", "chercheur", "commercial", "cordonnier"],
    "Sport": ["cyclisme", "course", "cricket", "curling", "canoë", "crossfit", "catch", "canyoning"],
    "Mythologie": ["cyclope", "cerbère", "centaure", "chronos", "cupidon", "chimère", "circé", "cérès", "cron os"]
};

const answerExamples = {
    "Pays": "Canada, Chine, Chili...",
    "Ville": "Cannes, Caen, Chicago...",
    "Animal": "Chat, chien, cheval...",
    "Film": "Coco, Cars, Coraline...",
    "Jeu vidéo": "Celeste, Cuphead, Control...",
    "Fruit ou légume": "Carotte, cerise, citron...",
    "Objet": "Chaise, couteau, cahier...",
    "Métier": "Cuisinier, coiffeur, comptable...",
    "Sport": "Cyclisme, cricket, curling...",
    "Mythologie": "Cerbère, Cyclope, Circé..."
};


/* -----------------------------------------
   SAUVEGARDE DU PETIT BAC
----------------------------------------- */

function getPetitBacStorageKey() {
    return `adp-petit-bac-${getParisDate()}`;
}

function loadPetitBacState() {
    try {
        const saved = localStorage.getItem(getPetitBacStorageKey());
        return saved ? JSON.parse(saved) : null;
    } catch {
        return null;
    }
}

function savePetitBacState(state) {
    try {
        localStorage.setItem(
            getPetitBacStorageKey(),
            JSON.stringify(state)
        );
    } catch (error) {
        console.error("Impossible de sauvegarder la partie.", error);
    }
}


/* -----------------------------------------
   NORMALISATION DES RÉPONSES
----------------------------------------- */

function normalizeAnswer(answer) {
    return answer
        .trim()
        .toLocaleLowerCase("fr-FR")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[’']/g, " ")
        .replace(/[-]/g, " ")
        .replace(/\s+/g, " ");
}


/* -----------------------------------------
   AFFICHAGE DES RÉSULTATS
----------------------------------------- */

function displayPetitBacResults(answers, savedScore = null) {
    const corrections = document.getElementById("corrections");
    const scoreElement = document.getElementById("score");
    const results = document.getElementById("results");

    if (!corrections || !scoreElement || !results) return;

    corrections.innerHTML = "";

    let score = 0;

    dailyChallenge.categories.forEach((category, index) => {
        const answer = answers[index] || "";
        const normalized = normalizeAnswer(answer);

        const accepted = acceptedAnswers[category].map(normalizeAnswer);

        const startsWithLetter = normalized.startsWith(
            normalizeAnswer(dailyChallenge.letter)
        );

        const isValid = normalized !== ""
            && startsWithLetter
            && accepted.includes(normalized);

        if (isValid) {
            score += 10;
        }

        const correction = document.createElement("div");
        correction.className = "correction-item";

        const status = document.createElement("span");
        status.className = isValid ? "answer-good" : "answer-bad";
        status.textContent = isValid ? "✓ Correct" : "✗ Non validé";

        const detail = document.createElement("p");
        detail.textContent = answer
            ? `Ta réponse : ${answer}`
            : "Tu n'as pas proposé de réponse.";

        const examples = document.createElement("p");
        examples.textContent = `Exemples acceptés : ${answerExamples[category]}`;

        correction.appendChild(status);
        correction.appendChild(detail);
        correction.appendChild(examples);

        corrections.appendChild(correction);
    });

    if (savedScore !== null) {
        score = savedScore;
    }

    scoreElement.innerHTML =
        `<span class="score-number">${score}</span> / 100 points`;

    results.hidden = false;
    return score;
}


/* -----------------------------------------
   INITIALISATION DU PETIT BAC
----------------------------------------- */

function initializePetitBac() {
    const letterElement = document.getElementById("daily-letter");
    const categoriesContainer = document.getElementById("categories-container");
    const form = document.getElementById("petit-bac-form");

    if (!letterElement || !categoriesContainer || !form) return;

    letterElement.textContent = dailyChallenge.letter;
    categoriesContainer.innerHTML = "";

    const savedState = loadPetitBacState();

    dailyChallenge.categories.forEach((category, index) => {
        const block = document.createElement("div");
        block.className = "category-block";

        const label = document.createElement("label");
        label.textContent = `${index + 1}. ${category}`;
        label.htmlFor = `answer-${index}`;

        const input = document.createElement("input");
        input.type = "text";
        input.id = `answer-${index}`;
        input.name = `answer-${index}`;
        input.placeholder = `Une réponse en ${dailyChallenge.letter}...`;
        input.autocomplete = "off";

        if (savedState && savedState.answers) {
            input.value = savedState.answers[index] || "";
        }

        if (savedState && savedState.status === "completed") {
            input.disabled = true;
        }

        input.addEventListener("input", () => {
            const currentState = loadPetitBacState();

            if (currentState && currentState.status === "completed") {
                return;
            }

            const answers = dailyChallenge.categories.map((_, i) => {
                const field = document.getElementById(`answer-${i}`);
                return field ? field.value : "";
            });

            savePetitBacState({
                date: getParisDate(),
                status: "in-progress",
                answers: answers
            });
        });

        block.appendChild(label);
        block.appendChild(input);
        categoriesContainer.appendChild(block);
    });

    const submitButton = form.querySelector("button[type='submit']");

    if (savedState && savedState.status === "completed") {
        displayPetitBacResults(
            savedState.answers,
            savedState.score
        );

        submitButton.disabled = true;
        submitButton.textContent = "Partie terminée";

        return;
    }

    if (savedState && savedState.status === "in-progress") {
        submitButton.textContent = "Reprendre ma partie";
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const currentState = loadPetitBacState();

        if (currentState && currentState.status === "completed") {
            return;
        }

        const answers = dailyChallenge.categories.map((_, index) => {
            const input = document.getElementById(`answer-${index}`);
            return input ? input.value.trim() : "";
        });

        const score = displayPetitBacResults(answers);

        savePetitBacState({
            date: getParisDate(),
            status: "completed",
            answers: answers,
            score: score
        });

        dailyChallenge.categories.forEach((_, index) => {
            const input = document.getElementById(`answer-${index}`);
            if (input) input.disabled = true;
        });

        submitButton.disabled = true;
        submitButton.textContent = "Partie terminée";

        markTodayAsPlayed();
        renderStreak();

        const results = document.getElementById("results");

        results.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}


/* -----------------------------------------
   INITIALISATION GÉNÉRALE
----------------------------------------- */

updateDate();
renderStreak();
initializePetitBac();

setInterval(updateDate, 30000);
