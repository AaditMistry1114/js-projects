let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

// this will store interval state
// it will be used as a variable to manage clearInterval 
let timer;

function start() {

    // this prevents user to call function again
    // calling function again activates new setInterval
    if(isRunning){
        return;
    }

    isRunning = true;

    timer = setInterval(() => {
        seconds ++;

        if(seconds === 60 ){
            minutes++;
            seconds = 0;
        }

        if(minutes === 60){
            hours++;
            minutes = 0;
        }

        document.getElementById("result").textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    },1000);
    
}

function stop(){

    // it is used to stop an interval. 
    clearInterval(timer);
    isRunning = false;
}


function reset(){
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("result").textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}

