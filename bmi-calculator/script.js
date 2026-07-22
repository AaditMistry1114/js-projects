const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function(){

    let heightInput = Number(document.getElementById("height").value);
    
    let weightInput = Number(document.getElementById("weight").value);

    let answer = document.getElementById("answer");

    let category = "";

    if(heightInput <= 0 || weightInput <= 0){
        answer.textContent = "Please enter a valid height and weight"
        return;

    }

    const BMI = (weightInput / ((heightInput / 100) ** 2));

    if (BMI < 18.5) {
        category = "Under weight";
    } else if (BMI < 25){
        category = "Normal weight";
    } else if (BMI < 30){
        category = "Overweight";
    } else{
        category = "Obese";
    }
        
    answer.textContent = `BMI: ${BMI.toFixed(2)} - Category: (${category})`


}