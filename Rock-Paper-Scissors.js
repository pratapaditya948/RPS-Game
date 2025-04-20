let score = JSON.parse(localStorage.getItem('score'))||{
  win: 0,
  lose: 0,
  tie:0
};

document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;

/* if(score === null){
score = {
  win: 0,
  lose: 0,
  tie:0
};
} */

function pickRandomMove(){
  const randomNumber = Math.random();
  let Move = '';

  if(randomNumber < 1/3){
    Move = 'Rock';
  } else if(randomNumber < 2/3){
    Move = 'Paper';
  } else {
    Move = 'Scissors';
  }

  return Move;
} 

function playGame(myMove){
  let computerMove = pickRandomMove();
  let result = '';

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
  myMove = changeTextToEmoji(myMove);

  updateScoreElements(result, myMove, computerMove);
}

function updateScoreElements(result, myMove, computerMove){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}</p>`;
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves-window').innerHTML = `You ${myMove} - ${computerMove} Computer`;
}

function resetScore(){
  score.win = 0;
  score.lose = 0;
  score.tie = 0;
  localStorage.removeItem('score');
  result = '';
  myMove = '';
  computerMove ='';
  updateScoreElements(result, myMove, computerMove);
  alert('Score has been reset');
}

let intervalId;

function autoPlay(){
  let buttonStatus = document.querySelector('.autoplay-button').innerText;
  if(buttonStatus === 'Auto Play'){
    intervalId = setInterval(function(){
      playGame(pickRandomMove());
    }, 1000);
    document.querySelector('.autoplay-button').innerHTML = 'Stop Auto Play';
  } else {
    clearInterval(intervalId);
    document.querySelector('.autoplay-button').innerHTML = 'Auto Play';
  }
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