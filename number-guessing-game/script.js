const MIN = 1;
const MAX = 100;
let attempt = 0;
const running = true;
const answer = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
let guess;



while(running){
    guess = Number(window.prompt(`Enter a number between range ${MIN} to ${MAX}`))

    if(isNaN(guess)){
        alert("Enter a valid number.");
    }
    else if(guess < MIN || guess > MAX) {
        alert("Enter a valid number.");
    }
    else{
        attempt++;

        if(guess < answer){
            alert("TOO LOW ! TRY AGAIN !");
        }
        else if(guess > answer){
            alert("TOO HIGH ! TRY AGAIN !");
        }
        else{
            alert(`CORRECT ! The number was ${answer}. It took you ${attempt} attempts`);
            running = false;
        }

    }

}