const toFarenheit = document.getElementById("ctf");

const toCelsius = document.getElementById("ftc");

const convertBtn = document.getElementById("convertBtn");

const answer = document.getElementById("answer");

let temp;

function converter(){
    
    const input = Number(document.getElementById("inputField").value);

    if(toFarenheit.checked){

        temp = (input * 1.8) + 32;

        answer.textContent = temp.toFixed(1) + " °F";
        
    }
    else if(toCelsius.checked){

        temp = (input - 32) / 1.8;

        answer.textContent = temp.toFixed(1) + " °C";
    }
    else{
        alert("Select a Unit.");
    }
}