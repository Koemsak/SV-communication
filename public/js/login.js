

// const IP = "192.168.88.23";
// const PORT = 3000;
// const URL_REQUEST = "http://" + IP + ":" + PORT;

const URL_REQUEST = "https://sv1communication.herokuapp.com";
// LOGIN

let username = document.querySelector("#name");
let password = document.querySelector("#password");
let error_txt = document.querySelector(".error-txt")

function login() {
    let getInfo = {
        name: username.value,
        password: password.value
    }
    axios.post(URL_REQUEST + "/login", getInfo).then((response) => {
        if (response.data) {
            localStorage.setItem("username", username.value);
            localStorage.setItem("password", password.value);
            window.location.href = "../message.html";
            error_txt.style.display = "none";
        } else {
            error_txt.style.display = "block";
        }
    })
}
let loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", login);
