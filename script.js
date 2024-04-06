let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let newGame = document.getElementById("newGame");
let displayContainer = document.querySelector(".displayContainer");
let displayWinner = document.getElementById("displayWinner");
let turn = 1;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn == 1) {
      box.innerHTML = "O";
      turn = 0;
    } else {
      box.innerHTML = "X";
      turn = 1;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};
const showWinner = (winner) => {
  displayWinner.innerHTML = `Congratulation, Winner is ${winner}`;
  displayContainer.style.display = "flex";
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    val1 = boxes[pattern[0]].innerHTML;
    val2 = boxes[pattern[1]].innerHTML;
    val3 = boxes[pattern[2]].innerHTML;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val2 == val3) {
        showWinner(val1);
      }
    }
  }
};

const Reset = () => {
  turn = 1;
  enableBoxes();
  displayContainer.style.display = "none";
};

newGame.addEventListener("click", Reset);
reset.addEventListener("click", Reset);
