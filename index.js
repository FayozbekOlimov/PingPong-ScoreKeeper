const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const restart = document.getElementById("restart");
const select = document.getElementById("select");

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

let scoreP1 = 0, scoreP2 = 0;
let gameScore = +select.value;
let gameOver = false;

player1.addEventListener('click', () => {
    if (!gameOver) {
        scoreP1++;
        if (scoreP1 == gameScore) {
            gameOver = true;
            score1.style.color = "green";
            score2.style.color = "red";
        }
    }
    score1.innerText = scoreP1;
})

player2.addEventListener('click', () => {
    if (!gameOver) {
        scoreP2++;
        if (scoreP2 == gameScore) {
            gameOver = true;
            score1.style.color = "red";
            score2.style.color = "green";
        }
    }
    score2.innerText = scoreP2;
})

select.addEventListener('change', () => {
    gameScore = +select.value;
    reset();
})

restart.addEventListener('click', reset);

function reset() {
    gameOver = false;
    scoreP1 = scoreP2 = 0;
    score1.innerText = score2.innerText = 0;
    score1.style.color = score2.style.color = 'black';
}