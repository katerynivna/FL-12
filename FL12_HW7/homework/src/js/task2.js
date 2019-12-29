let step1 = confirm('Do you want to play a game?');
if (step1 === false) {
    alert('You did not become a billionaire, but can.');
} else {
    let startingGuessRange = 8;
    const guessRangeIncrement = 4;
    const initialMaxPrize = 100;
    const initialTotalPrize = 0; 
    let maxPrize = 100;
    let totalPrize = 0;
    let userChoice = '';
    let gameGoing = true;
    let confirm2;
    const ONE = 1;
    const TWO = 2;
    const THREE = 3;
 
    while (gameGoing) {
        let totalGuesses = 3;
        let guessesLeft = 3;
        let currentPrize = maxPrize;
        let randomInt = Math.floor(Math.random() * Math.floor(startingGuessRange + ONE));
        for (let i = 0; i < totalGuesses; i++) {
            let message = 'Choose a roulette pocket number from 0 to ' + startingGuessRange + '\nAttempts left: '
            + guessesLeft + '\nTotal prize: ' + totalPrize + '$\nPossible prize on current attempt: '
            + currentPrize + '$';
            userChoice = parseInt(prompt(message));
            if (userChoice === randomInt) {
                totalPrize += currentPrize;
                confirm2 = confirm('Congratulation, you won!\nYour prize is: ' + totalPrize + '$\n'
                                   + 'Do you want to continue?');
                if (confirm2) {
                    maxPrize = maxPrize * TWO;
                    currentPrize = maxPrize;
                    startingGuessRange += guessRangeIncrement;
                    guessesLeft = THREE;
                } else {
                    alert('Thank you for your participation. Your prize is: ' + totalPrize +'$\n');
                    gameGoing = confirm('\nDo you want to play once again?');
                }
            } else {
                guessesLeft--;
                currentPrize = currentPrize / TWO;
            }
            if (guessesLeft === 0) {
                alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
                gameGoing = confirm('Do you want to play again?');
                if (gameGoing) {
                    currentPrize = initialMaxPrize;
                    totalPrize = initialTotalPrize;                    
                    guessesLeft = THREE;
                }
            }
        }
    }
}