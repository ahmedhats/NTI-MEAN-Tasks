'use strict'

const form = document.getElementById("Form");
form.addEventListener("submit", (event) => {
    console.log("test")
    const name = document.getElementById("fname").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const email = document.getElementById("email").value.trim();

    if (age < 16 || age > 100) {
        alert("age should be between 16 and 100");
        event.preventDefault();
        return;
    }
    if (/\d/.test(name)) {
        alert("Name cannot include numbers");
        event.preventDefault();
        return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address");
        event.preventDefault();
        return;
    }
})