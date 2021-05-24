

const BASE_URL  = "http://192.168.88.6:4000";

function accessApp(){
    let input_infor = {
        user: username.value,
        password: password.value
    };
    axios.post(BASE_URL + "/login", input_infor).then( (response)=>{
        if(response.data){
            localStorage.setItem("userLogin",username.value);
            localStorage.setItem("password",password.value);
            window.location.pathname = "../page/home.html";
        };
    })
};


let username = document.getElementById("username");
let password = document.getElementById("password");
let btn_login = document.getElementById("btnLogin");
btn_login.addEventListener("click", accessApp);