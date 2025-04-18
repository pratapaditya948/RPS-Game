let score = JSON.parse(localStorage.getItem('score'))||{
  win: 0,
  lose: 0,
  tie:0
};

let result = '';
let userMove = '';
let computerMove = '';

document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;

/* if(score === null){
score = {
  win: 0,
  lose: 0,
  tie:0
};
} */

/* function pickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';

if(randomNumber < 1/3){
  computerMove = 'Rock';
} else if(randomNumber < 2/3){
  computerMove = 'Paper';
} else {
  computerMove = 'Scissors';
}

return computerMove;
} */

function playGame(myMove){
  userMove = changeTextToEmoji(myMove);
  const randomNumber = Math.random();

  // computer playing      
  if(randomNumber < 1/3){
    computerMove = 'Rock';
  } else if(randomNumber < 2/3){
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }

  //checking results
  if(computerMove === myMove){
    result = 'Tie';
    score.tie++;
  } else if((myMove === 'Rock' && computerMove === 'Paper') || (myMove === 'Paper' && computerMove === 'Scissors') || (myMove === 'Scissors' && computerMove === 'Rock')){
    result = 'You Lose!!';
    score.lose++;
  } else {
    result = 'You Win!!';
    score.win++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  /* alert(`You picked ${myMove}. Computer picked ${computerMove}. \nResult: ${result} \nWins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`); */
  computerMove = changeTextToEmoji(computerMove);

  updateScoreElements();
}

function updateScoreElements(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}</p>`;
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves-window').innerHTML = `You ${userMove} - ${computerMove} Computer`;
}

function resetScore(){
  score.win = 0;
  score.lose = 0;
  score.tie = 0;
  localStorage.removeItem('score');
  result = '';
  userMove = '';
  computerMove ='';
  updateScoreElements();
  alert('Score has been reset');
}

function changeTextToEmoji(Move){
  if(Move === 'Rock'){
    return ` <img class="icons" src="images/rock-emoji.png"> `;
  } else if(Move === 'Paper'){
    return ` <img class="icons" src="images/paper-emoji.png"> `;
  } else{
    return ` <img class="icons" src="images/scissors-emoji.png"> `;
  }
}