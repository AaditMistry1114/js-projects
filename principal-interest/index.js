function calculate(){

    const principalInput = document.getElementById("principal");

    const interestInput = document.getElementById("rate");

    const yearsInput = document.getElementById("years");

    const totalAmount =  document.getElementById("total-amount");


    let principal = Number(principalInput.value);
    let rate = Number(interestInput.value / 100);
    let years = Number(yearsInput.value);
   
    const result = principal * Math.pow((1 + rate / 1), 1 * years);

    totalAmount.textContent = result.toLocaleString(undefined, {style : "currency", currency : "INR"});

}