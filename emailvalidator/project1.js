/* Ask the user to enter an email. 
Remove leading/trailing spaces. 
Convert it to lowercase. 
Check: Contains @ Ends with .com Username (before @) has at least 3 characters 
Print: "Valid Email" or "Invalid Email" Bonus challenge: If it's invalid, 
print why (e.g., "Missing @", "Must end with .com", or "Username too short"). */

const submitBtn = document.getElementById("mySubmitBtn");

submitBtn.onclick = function(){

    let email = document.getElementById("myInput").value
    
    email = email.trim().toLowerCase()

    if(!email.includes('@')){
        window.alert("Missing @");
    }
    else if(!email.endsWith('.com')){
        window.alert("Must end with .com");
    }
    else if(email.slice(0, email.indexOf('@')).length < 3){
        window.alert("Username too short");
    }
    else{
        console.log("Email is valid.");
        
    }
}