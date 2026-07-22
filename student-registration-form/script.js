const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function () {

    // ===== Get Input Values =====
    const name = document.getElementById("myName").value.trim();
    const age = Number(document.getElementById("myAge").value);
    const email = document.getElementById("myEmail").value.trim().toLowerCase();
    const password = document.getElementById("myPassword").value;
    const confirmPassword = document.getElementById("myConfirmPassword").value;

    const course = document.getElementById("course").value;

    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const other = document.getElementById("other");

    const terms = document.getElementById("myTerms");

    // ===== Name Validation =====
    if (name === "") {
        alert("Name is required.");
        return;
    }

    // ===== Age Validation =====
    // NaN means user types abc or anything except number
    if (isNaN(age) || age <= 0 ) {
        alert("Enter a valid age.");
        return;
    }

    // ===== Email Validation =====
    if (email === "") {
        alert("Email is required.");
        return;
    }

    if (!email.includes("@")) {
        alert("Missing '@'.");
        return;
    }

    if (!email.endsWith(".com")) {
        alert("Email must end with '.com'.");
        return;
    }

    const username = email.slice(0, email.indexOf("@"));

    if (username.length < 3) {
        alert("Username must contain at least 3 characters.");
        return;
    }

    // ===== Password Validation =====
    if (password === "" || confirmPassword === "") {
        alert("Password is required.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // ===== Course Validation =====
    if (course === "") {
        alert("Please select a course.");
        return;
    }

    // ===== Gender Validation =====
    if (!male.checked && !female.checked && !other.checked) {
        alert("Please select your gender.");
        return;
    }

    // ===== Terms & Conditions =====
    if (!terms.checked) {
        alert("Please accept the Terms & Conditions.");
        return;
    }

    // ===== Success =====
    alert("Registration Successful!");
}