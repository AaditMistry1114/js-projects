function generatePassword() {

    const passLength = Number(document.getElementById("length").value);
    const showPassword = document.getElementById("passResult");
    const isLower = document.getElementById("lowerChars");
    const isUpper = document.getElementById("upperChars");
    const isNum = document.getElementById("numChars");
    const isSymbol = document.getElementById("symbolChars");

    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "1234567890";
    const symbolsChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~";

    let password = "";
    let chosenChars = "";

    if (!passLength || passLength < 8) {
        showPassword.textContent = "Password length must be at least 8.";
        return;
    }

    if (isLower.checked) {
        chosenChars += lowerChars;
    }

    if (isUpper.checked) {
        chosenChars += upperChars;
    }

    if (isNum.checked) {
        chosenChars += numChars;
    }

    if (isSymbol.checked) {
        chosenChars += symbolsChars;
    }

    if (chosenChars.length === 0) {
        showPassword.textContent = "Please check at least one option.";
        return;
    }

    for (let i = 0; i < passLength; i++) {
        let charIndex = Math.floor(Math.random() * chosenChars.length);
        password += chosenChars[charIndex];
    }

    showPassword.textContent = password;
}