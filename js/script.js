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

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

console.log('computerMove zwróci:' + computerMove);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

console.log('playerMove zwróci:' + playerMove);


printMessage('Twój ruch to: ' + playerMove);


function displayResult(argComputerMove, argPlayerMove){
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
  printMessage('Remis');
} else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
  printMessage('Przegrywasz :(');
} else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
  printMessage('Remis');
} else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
  printMessage('Przegrywasz :(');
} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
  printMessage('Remis');
} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
  printMessage('Przegrywasz :(');
} else if ( argPlayerMove == 'nieznany ruch' ) {
 printMessage('Do wyboru tylko cyfra 1, 2 lub 3');
}

}

let gameResult = displayResult(computerMove, playerMove);

console.log('Funkcja displayResult zwróci:' + gameResult);



