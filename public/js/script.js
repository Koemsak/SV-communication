// REQUEST DATA FROM SERVER
const IP = "192.168.88.21";
const PORT =  "3000";

const URL_REQUES = "http://" + IP + ":" + PORT;

// USER ACTION
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

    userNameLogin.value = "";
    passwordLogin.value = "";
}

let singupBtn = document.querySelector("#btnSignup");
singupBtn.addEventListener('click', formSignup)


let loginForm = document.querySelector(".login");
function formLogin () {
    elementShow(loginForm, true);
    elementShow(signUpForm, false);
    elementShow(createBtn, false);
    elementShow(singupBtn, true);
    let obj = {
        name: userNameLogin.value,
        password: passwordLogin.value
    }
    axios.post(URL_REQUES + "/login", obj).then((response) => {
        let isValid = response.data;
        if (isValid) {
            elementShow(messege, true);
            elementShow(formContainer, false);
            elementShow(noInfo, false);
        } else {
            elementShow(noInfo, true);
        }
    })

}

let loginBtn = document.querySelector("#btnLogin");
loginBtn.addEventListener('click', formLogin)
// ALL CHAT
let messege = document.querySelector(".body-content")

// INFORMATION FROM INDEX 
let noInfo = document.querySelector("#notCorrectInfo");

// LOGOUT 
function logout () {
    elementShow(messege, false);
    elementShow(formContainer, true);
    userNameLogin.value = "";
    passwordLogin.value = "";
}
let logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener('click', logout);


// INFORMATION FROM INPUT
let userNameLogin = document.querySelector("#username");
let passwordLogin = document.querySelector("#password");
let formContainer = document.querySelector(".container");
