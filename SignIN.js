
// signin.js

function validateSignIn() {
    let errUser = document.getElementById("signin-errUser");
    let errPass = document.getElementById("signin-errPass");

    let userName = document.getElementById("signin-username");
    let password = document.getElementById("signin-password");

    let userNameValue = userName.value.trim();
    let passwordValue = password.value.trim();

    if (userNameValue === "") {
        userName.style.borderColor = "red";
        errUser.innerHTML = "User Name cannot be empty.";
    } else {
        userName.style.borderColor = "green";
        errUser.innerHTML = "";
    }

    if (passwordValue === "") {
        password.style.borderColor = "red";
        errPass.innerHTML = "Password cannot be empty.";
    } else {
        password.style.borderColor = "green";
        errPass.innerHTML = "";
    }

    // Dummy login validation
    if (userNameValue !== "" && passwordValue !== "") {
        if (userNameValue === "admin" && passwordValue === "password") {
            // Dummy successful login
            alert("Login successful!");
            // Redirect to dashboard or desired page
            window.location.href = "dashboard.html";
        } else {
            // Dummy failed login
            alert("Invalid username or password. Please try again.");
        }
    }
}

    
    if (userNameValue !== "" && passwordValue !== "") {
        if (userNameValue === "admin" && passwordValue === "password") {
            // successful login
            alert("Login successful!");
            // Redirect to dashboard or desired page
            window.location.href = "dashboard.html";
        } else {
            // failed login
            alert("Invalid username or password. Please try again.");
        }
    }
