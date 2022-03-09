const getScoreOfPlayer1 = document.querySelector("#score--0");
const getScoreOfPlayer2 = document.querySelector("#score--1");
const currentScoreOfPlayer1 = document.querySelector("#current--0");
const currentScoreOfPlayer2 = document.querySelector("#current--1");
const diceImage = document.querySelector(".dice");
const userDiceRollBtn = document.querySelector(".btn--roll");
const colorPlayer0 = document.querySelector(".player--0");
const colorPlayer1 = document.querySelector(".player--1");
const userHoldBtn = document.querySelector(".btn--hold");
const userResetBtn = document.querySelector(".btn--new");
getScoreOfPlayer1.textContent = 0;
getScoreOfPlayer2.textContent = 0;
diceImage.classList.add("hidden");
let currentScore = 0;
let currentPlayer = 0;
const playerArray = [0, 0];

const colorHandler = () => {
  colorPlayer0.classList.toggle("player--active");
  colorPlayer1.classList.toggle("player--active");
};

const holdBtnHandler = () => {
  const initialScore = document.getElementById(
    `score--${currentPlayer}`
  ).textContent;
  document.getElementById(`score--${currentPlayer}`).textContent =
    +initialScore + currentScore;
};

const scoreHandler = (score) => {
  if (score != 1) {
    currentScore += score;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentPlayer = currentPlayer == 0 ? 1 : 0;
    currentScore = 0;
    colorHandler();
  }
};

const displayWinner = () => {
  console.log(document.getElementById(`score--${currentPlayer}`).textContent);
  if (+document.getElementById(`score--${currentPlayer}`).textContent > 50) {
    console.log(document.getElementById(`score--${currentPlayer}`).textContent);
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add("player--winner");
    userDiceRollBtn.disabled = "true";
  }
};

const diceRollHandler = () => {
  const diceRandomNumber = Math.floor(Math.random() * 6) + 1;
  diceImage.classList.remove("hidden");
  diceImage.src = `dice-${diceRandomNumber}.png`;
  scoreHandler(diceRandomNumber);
  displayWinner();
};

const resetBtnHandler = () => {
  getScoreOfPlayer1.textContent = 0;
  getScoreOfPlayer2.textContent = 0;
  currentScoreOfPlayer1.textContent = 0;
  currentScoreOfPlayer2.textContent = 0;
  diceImage.classList.add("hidden");
  colorPlayer0.classList.remove("player--winner");
  colorPlayer1.classList.remove("player--winner");
  colorPlayer0.classList.add("player--active");
  colorPlayer1.classList.remove("player--active");
};

userResetBtn.addEventListener("click", resetBtnHandler);
userDiceRollBtn.addEventListener("click", diceRollHandler);
userHoldBtn.addEventListener("click", holdBtnHandler);
