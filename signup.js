var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

/*function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}*/

function validateForm() {
    let errUser = document.getElementById("errUser");
    let errEmail = document.getElementById("errEmail");
    let errPass = document.getElementById("errPass");
    let errConfirm = document.getElementById("errConfirm");

    let userName = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm");

    let userNameValue = userName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let confirmValue = confirm.value.trim();

    if (userNameValue === "") {
        userName.style.borderColor = "red";
        errUser.innerHTML = "User Name cannot be empty.";
    } else {
        if (!isNaN(userNameValue)) {
            userName.style.borderColor = "red";
            errUser.innerHTML = "Enter valid username";
        } else {
            userName.style.borderColor = "green";
            errUser.innerHTML = "";
        }
    }

    if (emailValue === "") {
        email.style.borderColor = "red";
        errEmail.innerHTML = "Email cannot be empty.";
    } else {
        if (!validateEmail(emailValue)) {
            email.style.borderColor = "red";
            errEmail.innerHTML = "Enter valid Email";
        } else {
            email.style.borderColor = "green";
            errEmail.innerHTML = "";
        }
    }

    if (passwordValue === "") {
        password.style.borderColor = "red";
        errPass.innerHTML = "Password cannot be empty.";
    } else {
        password.style.borderColor = "green";
        errPass.innerHTML = "";
    }

    if (confirmValue === "") {
        confirm.style.borderColor = "red";
        errConfirm.innerHTML = "Please confirm Password";
    } else {
        if (passwordValue !== confirmValue) {
            confirm.style.borderColor = "red";
            errConfirm.innerHTML = "Passwords don't match";
        } else {
            confirm.style.borderColor = "green";
            errConfirm.innerHTML = "";
        }
    }
}

function validateEmail(email) {
    // Regular expression for email validation
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// let trendFood = document.querySelectorAll(".trendFood");
// let foodCard = document.querySelectorAll(".foodCard");

// let count = 0;

// trendFood.forEach((imgs, index) => {
//     imgs.style.left = `${index * 100}%`;
// });

// const myFun = () => {
//     trendFood.forEach((curImg) => {
//         curImg.style.transform = `translateX(-${count * 100}%)`;
//     });
// };

// setInterval(() => {
//     count++;
//     if (count == trendFood.length) {
//         count = 0;
//     }
//     myFun();
// }, 4000);

// food Detail 

// foodCard.forEach((curCard) => {
//     curCard.addEventListener("click", function () {
//         let div = document.createElement("div");
//         div.classList.add("cardDetail");
//         div.innerHTML = `
//         <i id="icon"  class="fa-solid fa-xmark"></i>
//         <img src=${curCard.firstElementChild.src} alt="">
//        <h2>Food Details</h2>
//        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis alias, est excepturi inventore id minus! Aliquid at facilis quam a hic debitis?</p>
//         `;
//         document.querySelector("body").appendChild(div);
//         document.querySelector("#icon").addEventListener("click", function () {
//             div.remove();
//         });
//     });
// });
