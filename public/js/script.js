let elementShow = (element, show) => {
    if (show) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// HIDE FORM 
let signUpForm = document.querySelector('.signup');
signUpForm.style.display = "none";
let createBtn = document.querySelector("#btnCreate");

function formSignup() {
    elementShow(signUpForm, true);
    elementShow(loginForm, false);
    elementShow(createBtn, true);
    elementShow(singupBtn, false);
}

let singupBtn = document.querySelector("#btnSignup");
singupBtn.addEventListener('click', formSignup)


let loginForm = document.querySelector(".login");
function formLogin () {
    elementShow(loginForm, true);
    elementShow(signUpForm, false);
    elementShow(createBtn, false);
    elementShow(singupBtn, true);
}

let loginBtn = document.querySelector("#btnLogin");
loginBtn.addEventListener('click', formLogin)

