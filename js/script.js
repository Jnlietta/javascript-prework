{
  const playGame = function(playerInput){

  clearMessages();

  const getMoveName = function(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
  }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  const displayResult = function(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    if(
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') || 
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage('Ty wygrywasz!');
      playerScore = playerScore + 1;
      console.log('gracz wygrał:'+ playerScore);
      document.getElementById('result').innerHTML = 'Komputer ' + computerScore + ':' + playerScore + ' Gracz';

    } else if (argComputerMove == argPlayerMove){
      printMessage('Remis');
    } 
    else if ( argPlayerMove == 'nieznany ruch' ) {
      printMessage('Do wyboru tylko cyfra 1, 2 lub 3');
    }
    else {
      printMessage('Przegrywasz :(');
      computerScore = computerScore + 1;
      console.log('komputer wygrał:'+computerScore);
      document.getElementById('result').innerHTML = 'Komputer ' + computerScore + ':' + playerScore + ' Gracz';
    } 
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  console.log('computerMove zwróci:' + computerMove);

  printMessage('Mój ruch to: ' + computerMove);

  const playerMove = getMoveName(playerInput);

  console.log('playerMove zwróci:' + playerMove);

  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove, playerMove);

}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

let computerScore = 0;
let playerScore = 0;

document.getElementById('result').innerHTML = 'Komputer ' + computerScore + ':' + playerScore + ' Gracz';

//let resultScore = document.getElementById('result');
//console.log=(resultScore.innerHTML);

//resultScore.innerHTML = printMessage('Komputer ' + computerScore +':' + playerScore + ' Gracz');


}
