function playGame(playerInput){

  clearMessages();

  function getMoveName(argMoveId){
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

  function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    if(
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') || 
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove){
      printMessage('Remis');
    } 
    else if ( argPlayerMove == 'nieznany ruch' ) {
      printMessage('Do wyboru tylko cyfra 1, 2 lub 3');
    }
    else {
      printMessage('Przegrywasz :(');
    } 
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  console.log('computerMove zwróci:' + computerMove);

  printMessage('Mój ruch to: ' + computerMove);

  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  //console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

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

