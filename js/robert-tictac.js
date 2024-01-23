document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("board");
  const status = document.getElementById("status");
  const restartBtn = createRestartButton();

  const PLAYER_X = "X";
  const PLAYER_O = "O";
  const NUM_CELLS = 9;

  let currentPlayer = PLAYER_X;
  let gameBoard = Array(NUM_CELLS).fill("");

  initializeBoard();
  updateStatus();

  function initializeBoard() {
    for (let i = 0; i < NUM_CELLS; i++) {
      const cell = createCell(i);
      board.appendChild(cell);
    }
    document.querySelector(".container").appendChild(restartBtn);
  }

  function createCell(index) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = index;
    cell.addEventListener("click", handleCellClick);
    return cell;
  }

  function createRestartButton() {
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Game";
    restartBtn.style.display = "none";
    restartBtn.addEventListener("click", restartGame);
    return restartBtn;
  }

  function handleCellClick(event) {
    const index = event.target.dataset.index;

    if (gameBoard[index] === "") {
      gameBoard[index] = currentPlayer;
      event.target.textContent = currentPlayer;

      if (checkWinner()) {
        handleGameEnd(`${currentPlayer} wins!`);
      } else if (isBoardFull()) {
        handleGameEnd("It's a tie!");
      } else {
        currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        updateStatus();
      }
    }
  }

  function checkWinner() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        gameBoard[a] !== "" &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[b] === gameBoard[c]
      ) {
        return true;
      }
    }

    return false;
  }

  function isBoardFull() {
    return !gameBoard.includes("");
  }

  function handleGameEnd(message) {
    status.textContent = message;
    disableClicks();
    restartBtn.style.display = "block";
  }

  function disableClicks() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.removeEventListener("click", handleCellClick));
  }

  function restartGame() {
    currentPlayer = PLAYER_X;
    gameBoard = Array(NUM_CELLS).fill("");

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.textContent = "";
      cell.addEventListener("click", handleCellClick);
    });

    updateStatus();
    restartBtn.style.display = "none";
  }

  function updateStatus() {
    status.textContent = `Player ${currentPlayer}'s turn`;
  }
});
