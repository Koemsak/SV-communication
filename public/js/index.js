
// const IP = "192.168.88.23";
// const PORT = 3000;
// const URL_REQUEST = "http://" + IP + ":" + PORT;

const URL_REQUEST = "https://sv1communication.herokuapp.com";

// SIGN UP PAGE
let setauto = true;
let err_txt = document.querySelector(".error-txt");
let first = document.querySelector("#firstName");
let last = document.querySelector("#lastName");
let mail = document.querySelector("#mail");
let pass = document.querySelector("#password");

function signup() {
    if (first.value !== "" && last.value !== "" && mail.value !== "" && pass.value !== "") {
        let dataObj = {
            firstName: first.value,
            lastName: last.value,
            email: mail.value,
            password: pass.value
        }
        axios.post(URL_REQUEST + "/getDataSignup", dataObj).then((response) => {
            if (!response.data) {
                window.location.pathname = "../login.html";
                err_txt.style.display = "none";
            } else {
                err_txt.style.display = "block";
            }
        })
        localStorage.setItem("auto", )
    }
}

let btnSignup = document.querySelector("#signup");
btnSignup.addEventListener("click", signup);


