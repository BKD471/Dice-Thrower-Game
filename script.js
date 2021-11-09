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

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

//switchinging functionality of active players
const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1 Generating Random Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2 Displaying the rolled dice picture
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //3 Check for 1.If YES then switch player
    if (dice !== 1) {
      currentScore += dice;
      const currentScoreEl = document.querySelector(
        `#current--${activePlayer}`
      );
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
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1) Add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2)  check if current score is >=100 if yes then
    if (scores[activePlayer] >= 100) {
      //current player wins
      diceEl.classList.add("hidden");
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //3  else switch the active player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
