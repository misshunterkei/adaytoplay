
// ===================================
// A DAY TO PLAY
// Petit Bac quotidien
// ===================================

console.log("A Day to Play est prêt !");

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
