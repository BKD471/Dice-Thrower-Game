"use strict";

// selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  //1 Generating Random Dice Roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2 Displaying the rolled dice picture
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //3 Check for 1.If YES then switch player
  if (dice !== 1) {
    currentScore += dice;
    const currentScoreEl = document.querySelector(`#current--${activePlayer}`);
    currentScoreEl.textContent = currentScore;
  } else {
    // if (activePlayer === 0) {
    //   currentScore = 0;
    //   document.querySelector(`#current--${activePlayer}`).textContent =
    //     currentScore;
    //   player0El.classList.remove("player--active");
    //   player1El.classList.add("player--active");
    //   activePlayer = 1;
    // } else {
    //   currentScore = 0;
    //   document.querySelector(`#current--${activePlayer}`).textContent =
    //     currentScore;
    //   player0El.classList.add("player--active");
    //   player1El.classList.remove("player--active");
    //   activePlayer = 0;
    // }
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
