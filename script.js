
// ===================================
// A DAY TO PLAY
// Petit Bac quotidien
// ===================================

console.log("A Day to Play est prêt !");

// Défi de démonstration
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

// Afficher la lettre du jour
const letterElement = document.getElementById("daily-letter");

if (letterElement) {
    letterElement.textContent = dailyChallenge.letter;
}

// Afficher les catégories
const categoriesContainer = document.getElementById("categories-container");

if (categoriesContainer) {
    dailyChallenge.categories.forEach((category, index) => {
        const categoryBlock = document.createElement("div");

        const label = document.createElement("label");
        label.textContent = category;
        label.setAttribute("for", `answer-${index}`);

        const input = document.createElement("input");
        input.type = "text";
        input.id = `answer-${index}`;
        input.name = `answer-${index}`;
        input.placeholder = "Ta réponse...";

        categoryBlock.appendChild(label);
        categoryBlock.appendChild(input);

        categoriesContainer.appendChild(categoryBlock);
    });
}

/* ========================================
   CARTES RECTO-VERSO
======================================== */

.games-grid {
    display: grid;
    grid-template-columns: repeat(3, 320px);
    gap: 22px;
}

.game-card {
    width: 320px;
    height: 320px;
    aspect-ratio: auto;
    padding: 0;
    background: transparent;
    perspective: 1000px;
    border-radius: 7px;
}

.game-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s ease;
}

.game-card:hover .game-card-inner,
.game-card:focus-within .game-card-inner {
    transform: rotateY(180deg);
}

.game-card-face {
    position: absolute;
    inset: 0;
    padding: 25px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.game-card-front {
    justify-content: flex-start;
}

.game-card-back {
    transform: rotateY(180deg);
    justify-content: center;
}

.petit-bac-card .game-card-face {
    background: #354D7B;
    color: #F0F0EB;
}

.crossword-card .game-card-face {
    background: #66558F;
    color: #F0F0EB;
}

.mythos-card .game-card-face {
    background: #426F66;
    color: #F0F0EB;
}

.game-card-face h3 {
    font-size: 25px;
    line-height: 1.25;
    margin: 22px 0 8px;
    letter-spacing: -0.8px;
    color: #FFFFFF;
}

.game-card-face p:not(.game-number) {
    font-size: 13px;
    line-height: 1.6;
    margin: 0;
    color: rgba(255,255,255,0.88);
}

.game-card-face .game-number {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: rgba(255,255,255,0.75);
    margin: 0;
}

.card-hint {
    margin-top: auto;
    font-size: 11px;
    color: rgba(255,255,255,0.7);
}

.back-number {
    font-size: 11px;
    letter-spacing: 2px;
    opacity: 0.7;
}

.game-card-back a {
    margin-top: 25px;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
}

.game-card-back a:hover {
    text-decoration: underline;
}

.coming-soon {
    margin-top: 25px;
    font-size: 10px;
    letter-spacing: 1.3px;
    opacity: 0.75;
}

/* Cartes des jeux à venir */

.upcoming-card {
    border: 1px dashed var(--border);
    background: var(--surface);
    justify-content: center;
    align-items: center;
    color: var(--muted);
    transition: border-color 0.2s;
}

.upcoming-card:hover {
    border-color: var(--slate);
    transform: none;
}

.upcoming-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 25px;
}

.plus-symbol {
    font-size: 35px;
    font-weight: 300;
    color: var(--slate);
    margin-bottom: 15px;
}

.upcoming-content h3 {
    font-size: 18px;
    margin: 0 0 8px;
}

.upcoming-content p {
    font-size: 12px;
    line-height: 1.5;
    margin: 0;
}

/* Adaptation écrans plus petits */

@media (max-width: 1150px) {
    .games-grid {
        grid-template-columns: repeat(2, 320px);
    }
}

@media (max-width: 850px) {
    .games-grid {
        grid-template-columns: minmax(0, 320px);
    }

    .game-card {
        width: 100%;
        max-width: 320px;
    }
}
