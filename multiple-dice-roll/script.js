function rollDice(){

    const noOfDice = document.getElementById("diceInput").value;

    const diceResult = document.getElementById("diceResult");

    const diceImages = document.getElementById("diceImage");

    const values = [];

    const images = [];

    let sum = 0;

    for(let i = 1; i <= noOfDice; i++){

        const value = Math.floor(Math.random() * 6) + 1;
        sum += value;      
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="${value}">`);
        
    }
    
    diceResult.textContent = `dice: ${values.join(", ")}, Total Sum: ${sum}`;
    diceImages.innerHTML = images.join(" ");
}