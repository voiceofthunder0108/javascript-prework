{
  
    const playGame = function (playerInput){
      clearMessages();
  
      const getMoveName = function (argMoveId){
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
      
      const randomNumber = Math.floor(Math.random() * 3 + 1);
      console.log('Wylosowana liczba to: ' + randomNumber);
  
      const argComputerMove = getMoveName(randomNumber);
      printMessage('Mój ruch to: ' + argComputerMove);
      console.log('Gracz wpisał: ' + playerInput);
  
      const argPlayerMove = getMoveName(playerInput);
      printMessage('Twój ruch to: ' + argPlayerMove);
      console.log('moves:', argComputerMove, argPlayerMove);
  
      const displayResults = function (argComputerMove, argPlayerMove) {
        console.log('Ruch komputera to ' + argComputerMove);
        console.log('Ruch gracza to ' + argPlayerMove);
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
          printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
          printMessage('Mamy remis!');
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
          printMessage('Komputer wygrywa!');
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
          printMessage('Błąd gry! Wybierz proszę poprawną liczbę!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
          printMessage('Mamy remis!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
          printMessage('Komputer wygrywa!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
          printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
          printMessage('Błąd gry! Wybierz proszę poprawną liczbę!');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
          printMessage('Komputer wygrywa!');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
          printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
          printMessage('Mamy remis!');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
          printMessage('Błąd gry! Wybierz proszę poprawną liczbę!');
        }
      }
      displayResults(argComputerMove, argPlayerMove);
  
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
  
  }

