

const IP = "192.168.88.29";
const PORT = "5000";
const URL_REQUEST = "http://" + IP + ":" + PORT;


// LOGIN

let username = document.querySelector("#name");
let password = document.querySelector("#password");
let error_txt = document.querySelector(".error-txt")

function login() {
    if (username.value !== "" && password !== "") {
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
        email.value = "";
        password.value = "";
    }
}
let loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", login);