const board = document.getElementById("board");
const message = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");

let currentPlayer = "X";
let cells = Array(9).fill(null);
let gameActive = true;
let winLine = null;

// Tworzenie pól planszy
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", handleClick);
    board.appendChild(cell);
}

resetBtn.addEventListener("click", resetGame);

function handleClick(e) {
    const index = e.target.dataset.index;

    if (!gameActive || cells[index]) return;

    cells[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWin()) {
        message.textContent = `Wygrał: ${currentPlayer}`;
        gameActive = false;
        showWinLine(winLine);
    } else if (cells.every(cell => cell)) {
        message.textContent = "Remis!";
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        message.textContent = `Tura: ${currentPlayer}`;
    }
}

function checkWin() {
    const winPatterns = [
        [0,1,2],[3,4,5],[6,7,8], // poziomo
        [0,3,6],[1,4,7],[2,5,8], // pionowo
        [0,4,8],[2,4,6]          // na skos
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            winLine = pattern;
            return true;
        }
    }

    return false;
}

function resetGame() {
    cells = Array(9).fill(null);
    currentPlayer = "X";
    gameActive = true;
    message.textContent = "Tura: X";
    board.querySelectorAll(".cell").forEach(cell => cell.textContent = "");

    const oldLine = document.querySelector(".line");
    if (oldLine) oldLine.remove();
    winLine = null;
}

function showWinLine(pattern) {
    const [a, , c] = pattern;
    const cellA = document.querySelector(`[data-index="${a}"]`);
    const cellC = document.querySelector(`[data-index="${c}"]`);

    const line = document.createElement("div");
    line.classList.add("line");

    const rectA = cellA.getBoundingClientRect();
    const rectC = cellC.getBoundingClientRect();
    const rectBoard = board.getBoundingClientRect();

    const x1 = rectA.left + rectA.width / 2 - rectBoard.left;
    const y1 = rectA.top + rectA.height / 2 - rectBoard.top;
    const x2 = rectC.left + rectC.width / 2 - rectBoard.left;
    const y2 = rectC.top + rectC.height / 2 - rectBoard.top;

    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;

    line.style.width = `${length}px`;
    line.style.left = `${x1}px`;
    line.style.top = `${y1}px`;
    line.style.transform = `rotate(${angle}deg)`;

    board.appendChild(line);
}
