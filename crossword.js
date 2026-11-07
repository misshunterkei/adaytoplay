
/* ========================================
   A DAY TO PLAY — POP CULTURE CROSSWORD
======================================== */

/* DÉFI DE DÉMONSTRATION */

const crosswordChallenge = {
    theme: "Un univers magique",
    description: "Des personnages et des éléments incontournables d'une célèbre saga.",
    rows: 8,
    columns: 11,

    words: [
        {
            id: "harry",
            number: 1,
            direction: "across",
            row: 0,
            column: 4,
            answer: "HARRY",
            clue: "Le jeune sorcier à la cicatrice en forme d'éclair."
        },
        {
            id: "hermione",
            number: 1,
            direction: "down",
            row: 0,
            column: 4,
            answer: "HERMIONE",
            clue: "La meilleure amie de Harry, brillante élève et sorcière."
        },
        {
            id: "ron",
            number: 2,
            direction: "across",
            row: 2,
            column: 4,
            answer: "RON",
            clue: "Le meilleur ami de Harry, membre de la famille Weasley."
        },
        {
            id: "quidditch",
            number: 3,
            direction: "across",
            row: 4,
            column: 2,
            answer: "QUIDDITCH",
            clue: "Le sport pratiqué sur des balais volants."
        },
        {
            id: "dobby",
            number: 4,
            direction: "across",
            row: 5,
            column: 3,
            answer: "DOBBY",
            clue: "Un elfe de maison particulièrement attachant."
        }
    ]
};

const CROSSWORD_MAX_LIVES = 3;

/* SAUVEGARDE QUOTIDIENNE */

function getCrosswordDate() {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Europe/Paris",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(new Date());
}

const crosswordStorageKey = `adp-crossword-${getCrosswordDate()}`;

function loadCrosswordState() {
    try {
        const saved = localStorage.getItem(crosswordStorageKey);
        return saved ? JSON.parse(saved) : null;
    } catch (error) {
        return null;
    }
}

function saveCrosswordState() {
    try {
        localStorage.setItem(
            crosswordStorageKey,
            JSON.stringify(crosswordState)
        );
    } catch (error) {
        console.warn("Impossible de sauvegarder la partie Crossword.");
    }
}

let crosswordState = loadCrosswordState() || {
    status: "in-progress",
    lives: CROSSWORD_MAX_LIVES,
    answers: {}
};

/* NORMALISATION DES RÉPONSES */

function normalizeCrosswordAnswer(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .replace(/[^A-Z]/g, "");
}

/* CONSTRUCTION DE LA GRILLE */

function buildCrosswordGrid() {
    const grid = document.getElementById("crossword-grid");

    if (!grid) return;

    grid.innerHTML = "";
    grid.style.setProperty(
        "--grid-columns",
        crosswordChallenge.columns
    );

    const cells = {};

    crosswordChallenge.words.forEach(word => {
        for (let i = 0; i < word.answer.length; i++) {
            const row = word.row +
                (word.direction === "down" ? i : 0);

            const column = word.column +
                (word.direction === "across" ? i : 0);

            const key = `${row}-${column}`;

            if (!cells[key]) {
                cells[key] = {
                    row,
                    column,
                    letter: "",
                    number: null
                };
            }

            cells[key].letter = word.answer[i];

            if (i === 0) {
                cells[key].number = word.number;
            }
        }
    });

    for (let row = 0; row < crosswordChallenge.rows; row++) {
        for (let column = 0; column < crosswordChallenge.columns; column++) {
            const key = `${row}-${column}`;
            const cellData = cells[key];

            const cell = document.createElement("div");
            cell.className = "crossword-cell";

            if (!cellData) {
                cell.classList.add("black");
            } else {
                cell.dataset.cell = key;
                cell.textContent = "";

                if (cellData.number !== null) {
                    const number = document.createElement("span");
                    number.className = "cell-number";
                    number.textContent = cellData.number;
                    cell.appendChild(number);
                }
            }

            grid.appendChild(cell);
        }
    }

    updateCrosswordGrid();
}

/* AFFICHAGE DES DÉFINITIONS */

function buildCrosswordClues() {
    const across = document.getElementById("crossword-across");
    const down = document.getElementById("crossword-down");

    if (!across || !down) return;

    across.innerHTML = "";
    down.innerHTML = "";

    crosswordChallenge.words.forEach(word => {
        const container = document.createElement("div");
        container.className = "crossword-clue";
        container.dataset.wordId = word.id;

        const top = document.createElement("div");
        top.className = "crossword-clue-top";

        const number = document.createElement("span");
        number.className = "crossword-clue-number";
        number.textContent = word.number;

        const clue = document.createElement("div");
        clue.className = "crossword-clue-text";
        clue.textContent = word.clue;

        top.append(number, clue);

        const answerRow = document.createElement("div");
        answerRow.className = "crossword-answer-row";

        const input = document.createElement("input");
        input.type = "text";
        input.id = `answer-${word.id}`;
        input.placeholder = "Ta réponse...";
        input.autocomplete = "off";
        input.spellcheck = false;
        input.setAttribute("aria-label", `Réponse ${word.number}`);

        input.value = crosswordState.answers[word.id]?.value || "";

        const button = document.createElement("button");
        button.type = "button";
        button.className = "crossword-check-button";
        button.textContent = "Valider";
        button.addEventListener("click", () => checkCrosswordAnswer(word));

        const feedback = document.createElement("p");
        feedback.className = "crossword-feedback";
        feedback.id = `feedback-${word.id}`;

        answerRow.append(input, button);
        container.append(top, answerRow, feedback);

        if (word.direction === "across") {
            across.appendChild(container);
        } else {
            down.appendChild(container);
        }

        if (crosswordState.answers[word.id]?.correct) {
            input.disabled = true;
            button.disabled = true;
            feedback.textContent = "Bonne réponse !";
            feedback.classList.add("correct");
        }
    });
}

/* VALIDATION INDIVIDUELLE */

function checkCrosswordAnswer(word) {
    if (crosswordState.status !== "in-progress") return;

    const input = document.getElementById(`answer-${word.id}`);
    const feedback = document.getElementById(`feedback-${word.id}`);

    if (!input || !feedback) return;

    if (crosswordState.answers[word.id]?.correct) return;

    const userAnswer = normalizeCrosswordAnswer(input.value);

    if (!userAnswer) {
        feedback.textContent = "Entre une réponse avant de valider.";
        feedback.className = "crossword-feedback incorrect";
        return;
    }

    if (userAnswer === word.answer) {
        crosswordState.answers[word.id] = {
            value: input.value,
            correct: true
        };

        input.disabled = true;
        input.value = word.answer;

        const button = input.nextElementSibling;
        button.disabled = true;

        feedback.textContent = "Bonne réponse !";
        feedback.className = "crossword-feedback correct";

        saveCrosswordState();
        updateCrosswordGrid();
        updateCrosswordProgress();

        const found = crosswordChallenge.words.filter(item =>
            crosswordState.answers[item.id]?.correct
        ).length;

        if (found === crosswordChallenge.words.length) {
            finishCrossword("won");
        }

    } else {
        crosswordState.answers[word.id] = {
            value: input.value,
            correct: false
        };

        crosswordState.lives--;

        feedback.textContent = "Ce n'est pas la bonne réponse. Réessaie !";
        feedback.className = "crossword-feedback incorrect";

        saveCrosswordState();
        updateCrosswordLives();

        if (crosswordState.lives <= 0) {
            finishCrossword("lost");
        }
    }
}

/* MISE À JOUR DE LA GRILLE */

function updateCrosswordGrid() {
    const cells = document.querySelectorAll(".crossword-cell[data-cell]");

    cells.forEach(cell => {
        cell.textContent = "";
    });

    crosswordChallenge.words.forEach(word => {
        if (!crosswordState.answers[word.id]?.correct) return;

        for (let i = 0; i < word.answer.length; i++) {
            const row = word.row +
                (word.direction === "down" ? i : 0);

            const column = word.column +
                (word.direction === "across" ? i : 0);

            const key = `${row}-${column}`;
            const cell = document.querySelector(
                `.crossword-cell[data-cell="${key}"]`
            );

            if (cell) {
                cell.textContent = word.answer[i];
            }
        }
    });

    // Réafficher les numéros après le remplissage des lettres.
    crosswordChallenge.words.forEach(word => {
        const key = `${word.row}-${word.column}`;
        const cell = document.querySelector(
            `.crossword-cell[data-cell="${key}"]`
        );

        if (cell && !cell.querySelector(".cell-number")) {
            const number = document.createElement("span");
            number.className = "cell-number";
            number.textContent = word.number;
            cell.appendChild(number);
        }
    });
}

/* MISE À JOUR DES INDICATEURS */

function updateCrosswordProgress() {
    const found = crosswordChallenge.words.filter(word =>
        crosswordState.answers[word.id]?.correct
    ).length;

    const display = document.getElementById("words-found");

    if (display) {
        display.textContent = `${found} / ${crosswordChallenge.words.length}`;
    }
}

function updateCrosswordLives() {
    const container = document.getElementById("crossword-lives");

    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < CROSSWORD_MAX_LIVES; i++) {
        const heart = document.createElement("span");
        heart.className = "life";
        heart.textContent = "♥";

        if (i >= crosswordState.lives) {
            heart.classList.add("lost");
        }

        container.appendChild(heart);
    }

    container.setAttribute(
        "aria-label",
        `${crosswordState.lives} vies restantes`
    );
}

/* FIN DE PARTIE */

function finishCrossword(status) {
    if (crosswordState.status !== "in-progress") return;

    crosswordState.status = status;
    saveCrosswordState();

    const results = document.getElementById("crossword-results");
    const title = document.getElementById("crossword-result-title");
    const message = document.getElementById("crossword-result-message");
    const solutions = document.getElementById("crossword-solutions");

    if (!results || !title || !message || !solutions) return;

    if (status === "won") {
        title.textContent = "Bravo, défi réussi !";
        message.textContent = "Tu as retrouvé tous les mots de la grille.";
        
        // Une victoire valide la journée dans la série de connexion.
        if (typeof markTodayAsPlayed === "function") {
            markTodayAsPlayed();
        }

        if (typeof renderStreak === "function") {
            renderStreak();
        }

    } else if (status === "lost") {
        title.textContent = "Plus de vies !";
        message.textContent = "La partie est terminée. Voici les réponses.";

    } else {
        title.textContent = "Partie abandonnée";
        message.textContent = "Voici les réponses de cette grille.";
    }

    showCrosswordSolutions();

    results.hidden = false;

    document.querySelectorAll(
        ".crossword-answer-row input, .crossword-check-button"
    ).forEach(element => {
        element.disabled = true;
    });

    const abandonButton = document.getElementById("abandon-crossword");

    if (abandonButton) {
        abandonButton.disabled = true;
        abandonButton.textContent = "Partie terminée";
    }

    results.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* AFFICHAGE DES SOLUTIONS */

function showCrosswordSolutions() {
    const solutions = document.getElementById("crossword-solutions");

    if (!solutions) return;

    solutions.innerHTML = "";

    crosswordChallenge.words.forEach(word => {
        const item = document.createElement("div");
        item.className = "crossword-solution-item";

        const strong = document.createElement("strong");
        strong.textContent = `${word.number}. ${word.answer}`;

        const clue = document.createElement("span");
        clue.textContent = ` — ${word.clue}`;

        item.append(strong, clue);
        solutions.appendChild(item);
    });

    // En fin de partie, afficher la grille complète.
    crosswordChallenge.words.forEach(word => {
        for (let i = 0; i < word.answer.length; i++) {
            const row = word.row +
                (word.direction === "down" ? i : 0);

            const column = word.column +
                (word.direction === "across" ? i : 0);

            const cell = document.querySelector(
                `.crossword-cell[data-cell="${row}-${column}"]`
            );

            if (cell) {
                cell.textContent = word.answer[i];
            }
        }
    });

    // Restaurer les numéros de définition.
    crosswordChallenge.words.forEach(word => {
        const key = `${word.row}-${word.column}`;
        const cell = document.querySelector(
            `.crossword-cell[data-cell="${key}"]`
        );

        if (cell && !cell.querySelector(".cell-number")) {
            const number = document.createElement("span");
            number.className = "cell-number";
            number.textContent = word.number;
            cell.appendChild(number);
        }
    });
}

/* ABANDON */

function abandonCrossword() {
    if (crosswordState.status !== "in-progress") return;

    const confirmed = window.confirm(
        "Veux-tu vraiment abandonner ? La solution complète sera révélée."
    );

    if (confirmed) {
        finishCrossword("abandoned");
    }
}

/* RESTAURATION D'UNE PARTIE */

function restoreCrosswordState() {
    updateCrosswordLives();
    updateCrosswordProgress();
    updateCrosswordGrid();

    if (crosswordState.status !== "in-progress") {
        finishCrossword(crosswordState.status);
    }
}

/* INITIALISATION */

function initializeCrossword() {
    const theme = document.getElementById("crossword-theme");
    const description = document.getElementById("crossword-description");
    const abandonButton = document.getElementById("abandon-crossword");

    if (!theme || !description) return;

    theme.textContent = crosswordChallenge.theme;
    description.textContent = crosswordChallenge.description;

    buildCrosswordGrid();
    buildCrosswordClues();

    if (abandonButton) {
        abandonButton.addEventListener("click", abandonCrossword);
    }

    restoreCrosswordState();
}

document.addEventListener("DOMContentLoaded", initializeCrossword);
