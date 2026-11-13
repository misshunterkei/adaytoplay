// Générateur de mots croisés 15 × 15 — première version de test.
(function () {
  const SIZE = 15;

  function normalize(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toUpperCase().replace(/[^A-Z0-9]/g, "");
  }

  function buildGrid(source, seed = Date.now()) {
    const pool = (source || [])
      .filter(item => item && item.category === "personnage" && item.status === "major")
      .map(item => ({
        id: item.id,
        answer: normalize(item.name),
        display: item.name,
        clue: Array.isArray(item.clues) ? item.clues[0] : ""
      }))
      .filter(item => item.answer.length >= 3 && item.answer.length <= SIZE && item.clue);

    // Un ordre pseudo-aléatoire stable pour un même tirage.
    let state = seed >>> 0;
    const random = () => ((state = (state * 1664525 + 1013904223) >>> 0) / 4294967296);
    const shuffled = pool.slice().sort(() => random() - 0.5);
    const words = shuffled.slice(0, 45).sort((a, b) => b.answer.length - a.answer.length);

    function emptyGrid() {
      return Array.from({ length: SIZE }, () => Array(SIZE).fill(null));
    }

    function canPlace(grid, word, row, col, dir) {
      const dr = dir === "down" ? 1 : 0;
      const dc = dir === "across" ? 1 : 0;
      const endRow = row + dr * (word.answer.length - 1);
      const endCol = col + dc * (word.answer.length - 1);
      if (row < 0 || col < 0 || endRow >= SIZE || endCol >= SIZE) return null;

      const beforeRow = row - dr, beforeCol = col - dc;
      const afterRow = endRow + dr, afterCol = endCol + dc;
      if (beforeRow >= 0 && beforeCol >= 0 && beforeRow < SIZE && beforeCol < SIZE && grid[beforeRow][beforeCol]) return null;
      if (afterRow >= 0 && afterCol >= 0 && afterRow < SIZE && afterCol < SIZE && grid[afterRow][afterCol]) return null;

      let crossings = 0;
      for (let i = 0; i < word.answer.length; i++) {
        const r = row + dr * i, c = col + dc * i;
        const existing = grid[r][c];
        if (existing && existing.letter !== word.answer[i]) return null;
        if (existing) crossings++;

        const sideCells = dir === "across"
          ? [[r - 1, c], [r + 1, c]]
          : [[r, c - 1], [r, c + 1]];
        for (const [sr, sc] of sideCells) {
          if (sr >= 0 && sc >= 0 && sr < SIZE && sc < SIZE && grid[sr][sc] && !existing) return null;
        }
      }
      return crossings;
    }

    function place(grid, word, row, col, dir) {
      const dr = dir === "down" ? 1 : 0;
      const dc = dir === "across" ? 1 : 0;
      for (let i = 0; i < word.answer.length; i++) {
        const r = row + dr * i, c = col + dc * i;
        if (!grid[r][c]) grid[r][c] = { letter: word.answer[i] };
      }
      word.row = row; word.col = col; word.dir = dir;
    }

    let best = null;
    for (let attempt = 0; attempt < 80; attempt++) {
      const grid = emptyGrid();
      const placed = [];
      const first = words[attempt % Math.max(1, words.length)];
      if (!first) break;
      const startRow = Math.floor((SIZE - 1) / 2);
      const startCol = Math.floor((SIZE - first.answer.length) / 2);
      place(grid, first, startRow, startCol, "across");
      placed.push({ ...first });

      for (const candidate of words) {
        if (placed.some(p => p.id === candidate.id)) continue;
        let options = [];
        for (const existing of placed) {
          for (let i = 0; i < existing.answer.length; i++) {
            for (let j = 0; j < candidate.answer.length; j++) {
              if (existing.answer[i] !== candidate.answer[j]) continue;
              const dir = existing.dir === "across" ? "down" : "across";
              const row = existing.row + (existing.dir === "down" ? i : 0) - (dir === "down" ? j : 0);
              const col = existing.col + (existing.dir === "across" ? i : 0) - (dir === "across" ? j : 0);
              const score = canPlace(grid, candidate, row, col, dir);
              if (score !== null && score > 0) options.push({ row, col, dir, score });
            }
          }
        }
        if (options.length) {
          options.sort((a, b) => b.score - a.score);
          const choice = options[Math.floor(random() * Math.min(options.length, 4))];
          place(grid, candidate, choice.row, choice.col, choice.dir);
          placed.push({ ...candidate, row: choice.row, col: choice.col, dir: choice.dir });
        }
      }
      if (!best || placed.length > best.words.length) best = { grid, words: placed };
    }

    if (!best || best.words.length < 5) {
      throw new Error("La banque ne permet pas encore de construire une grille suffisamment croisée. Il faut enrichir ou ajuster la sélection.");
    }

    // Numérotation commune aux définitions horizontales et verticales.
    const starts = new Map();
    for (const word of best.words) starts.set(word.row + "," + word.col, true);
    const sortedStarts = [...starts.keys()].map(key => key.split(",").map(Number))
      .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const numbers = new Map(sortedStarts.map((pos, i) => [pos.join(","), i + 1]));
    best.words.forEach(word => word.number = numbers.get(word.row + "," + word.col));
    return { size: SIZE, cells: best.grid, words: best.words.sort((a, b) => a.number - b.number) };
  }

  window.ADP_CROSSWORD_GENERATOR = { buildGrid, normalize };
})();
