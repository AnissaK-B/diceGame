const newgame = document.querySelector('.btn-new');
const player1 = document.getElementById('player-1');
const player2 = document.getElementById('player-2');
let btnRoll = document.querySelector('.btn-roll');
let hold = document.querySelector('.btn-hold');

const diceImage = document.querySelector('.dice-image');
let player1RoundScore = 0;
let currentPlayer = player1;
const respTrue = document.querySelector('.resp-true');
const respFalse = document.querySelector('.resp-false');

const winningScore = 100;

btnRoll.addEventListener('click', () => {
    const diceResult = Math.floor(Math.random() * 6) + 1;

    diceImage.src = `images/dice${diceResult}.jpg`;

    if (diceResult === 1) {
        player1RoundScore = 0;
        respFalse.style.visibility = 'visible';
        respFalse.textContent = 'Vous avez perdu !';
        currentPlayer.querySelector('.score').textContent = 0;
        currentPlayer.querySelector('.current').textContent = 0;
        currentPlayer = (currentPlayer === player1) ? player2 : player1;
    } else {
        player1RoundScore += diceResult;
        currentPlayer.querySelector('.current').textContent = player1RoundScore;
    }
   
});

const holdFunction = () => {
    currentPlayerRoundScore = (currentPlayer === player1) ? player1RoundScore : player2RoundScore;
    currentPlayerRoundScore += player1RoundScore;

    currentPlayer.querySelector('.score').textContent = currentPlayerRoundScore;
    currentPlayer.querySelector('.current').textContent = 0;
    player1RoundScore = 0;

    if (currentPlayerRoundScore >= winningScore) {
        respTrue.style.visibility = 'visible';
        respTrue.textContent = `${currentPlayer.id} a gagné !`;
        newgame.click();
    } else {
        currentPlayer = (currentPlayer === player1) ? player2 : player1;
    }
};

btnRoll.addEventListener('click', btnRoll);
hold.addEventListener('click', holdFunction);

newgame.addEventListener('click', () => {
    respTrue.style.visibility = 'hidden';
    respFalse.style.visibility = 'hidden';
    player1RoundScore = 0;
    player2RoundScore = 0;
    player1.querySelector('.score').textContent = 0;
    player1.querySelector('.current').textContent = 0;
    player2.querySelector('.score').textContent = 0;
    player2.querySelector('.current').textContent = 0;
    currentPlayer = player1;
});