// Exercise 1 : Play A Guessing Game

// Steps
// Explanation of the game : the point of the game is to guess the number that the computer has in “mind”.

// In the JS file, create a function called playTheGame() that takes no parameter.
function playTheGame(){
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).
    const wannaPlay = confirm("Wanna play?");
    if(wannaPlay == false){
        // If the answer is false, alert “No problem, Goodbye”.
        alert('No problem, Goodbye');
    }else{
        // If his answer is true, follow these steps:
        // Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :
        const numberUser = prompt("give me a number between 0 and 10")
        const userNumber = Number(numberUser);
        // If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
        if(isNaN(userNumber)){
            alert('Sorry Not a number, Goodbye');
        }else if(userNumber > 10){
              // If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
              alert("Sorry it’s not a good number, Goodbye");
        }else{
            // Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.
            const computerNumber = Math.floor(Math.random()*11);
            compareNumbers(userNumber, computerNumber);
        }       
    }
}

// Second Part
// Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber
function compareNumbers(userNumber, computerNumber){
    // The point of this function is to check if the userNumber is the same as the computerNumber:
    // If userNumber is equal to computerNumber, alert “WINNER” and stop the game.
    if( userNumber === computerNumber){
        alert('WINNER');
    }// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).
    else if( userNumber > computerNumber){
        alert("Your number is bigger then the computer’s, guess again");
        const newNumber = prompt("Take another guess...");
        userNumber = Number(newNumber);
        compareNumbers(userNumber, computerNumber); 
        //  (Hint: use the built-in prompt() function to ask the user for a new number).
    }// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).
    else{
        alert("Your number is smaller then the computer’s, guess again");
        const newNumber = prompt("Take another guess...");
        userNumber = Number(newNumber);
        compareNumbers(userNumber, computerNumber); 
    }
}

// If the user guessed more than 3 times, alert “out of chances” and exit the function.
//I wasn't able to do this last part


// // Bonus
// // In the First Part, instead of stopping the process if the user didn’t enter a valid number. Continue asking for a number until the user enters a valid number.