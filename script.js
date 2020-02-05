let doTheThing = function () {

    //computer picks a number


    /* Loops have three parts, Control variable; control boolean expression; control increment,decrement,update

       control variable - controls when the loop executes

       control boolean - boolean expression using the vatiabel which should at some point equal false

       Control update = assigning a new value to the control varable so that eventually evaluates to false

     */
    let restart = "Yes";
    while (restart === "Yes") {
        let compnum = Math.floor((Math.random() * 10) + 1);
        alert(compnum);
        //Alert for guess

        let playerGuess = parseInt(prompt("Guess a number between 1 and 10."), 10);
        while (playerGuess !== compnum) {
            if (playerGuess > compnum) {
                playerGuess = prompt("Too high, guess a lower number");
            } else
                playerGuess = prompt("Too low, guess again.");
        }
        alert("You guessed it!!!!")
        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)");
    }

    // alerts the user to give their guess
    //checks if guess is same as comp pick
    //spit out higher say "too high" if too low say "too low"
    //if equal, alert the user "YOU WIN!"
    //continue letting player guess
    //if repeat - repeat program
    //if no - Explode computer
};


let DoTheOtherThing = function () {

    //SAME PROGRAM, DO WHILE LOOP
    let restart;
    let playersGuess;

    do{
        let compnum = Math.floor((Math.random()*10)+1)
        do{
            let playerGuess = parseInt(prompt("Guess a number between 1 and 10."), 10);
            if (playerGuess > compnum) {
                playerGuess = prompt("Too high, guess a lower number");
            } else
                playerGuess = prompt("Too low, guess again.");
        }


        }while(playersGuess !== compnum)

        alert("YOU GUESSED IT!!")
        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)");

    }while(restart === "Yes");


};