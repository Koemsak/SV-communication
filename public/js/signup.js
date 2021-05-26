
const IP = "192.168.137.1";
const PORT = 3000;
const URL_REQUEST = "http://" + IP + ":" + PORT;
// const URL_REQUEST = "https://sv1communication.herokuapp.com";
// SIGN UP PAGE
let err_txt = document.querySelector(".error-txt");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let mail = document.querySelector("#mail");
let password = document.querySelector("#password");
let btn_signup = document.querySelector("#signup");

function signupFunction(){
    // sign up data:
    let sign_up_data = {
        firstName: firstName.value,
        lastName: lastName.value,
        mail: mail.value,
        password: password.value
    };
    axios.post(URL_REQUEST + "/signup", sign_up_data).then( (response)=>{
        let could_signup = response.data;
        console.log(could_signup);
        if (could_signup){
            window.location.pathname ="message.html";
            err_txt.style.display = "none";
        }else{
            err_txt.style.display = "block"
        }
    });
}
btn_signup.addEventListener("click", signupFunction);

