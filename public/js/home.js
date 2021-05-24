

const IP = "192.168.88.6";
const PORT =  4000;
const URL_REQUES = "http://" + IP + ":" + PORT;
//get all data from server in data_message.json;
let data_message = [];
let new_data = [];
let status = false;
function getinformation(){
    if(status){
        for (data of data_message){
            if (body_message.firstElementChild!==null){
                console.log(body_message.firstElementChild);
                body_message.firstElementChild.remove();
            }else{
                status = false;
            }
        }
    }
    else{
        userAccount.textContent = localStorage.getItem("userLogin");
        for (let data of data_message){
            let sender = document.createElement("div");
            sender.className = "sender";
            let receiver = document.createElement("div");
            receiver.className = "receiver";
            let message = document.createElement("p");
            message.style.padding = "10px";
            message.style.borderRadius = "10px";
            message.style.color = "white";
            if (data.name === localStorage.getItem("userLogin")){
                message.textContent = data.name+": "+data.message;
                sender.appendChild(message);
                sender.style.width = "100%";
                sender.style.display ="flex";
                sender.style.justifyContent = "flex-end";
                sender.style.alignItems = "flex-end";
                message.style.background = "teal";
                body_message.appendChild(sender);
            }else{
                message.textContent = data.name + ": " + data.message;
                receiver.appendChild(message);
                receiver.style.width = "100%";
                receiver.style.display = "flex";
                receiver.style.justifyContent = "flex-start";
                receiver.style.alignItems = "flex-start";
                message.style.background = "#fb8256";
                body_message.appendChild(receiver);
            }
        }
    };
};
function showMessage(){
    getinformation();
    status = true
    let allInfo = {
        name: localStorage.getItem("userLogin"),
        message: text.value
    };
    new_data.push(allInfo);
    axios.post(URL_REQUES + "/add", new_data).then( (response) =>{
        
    });
};
function loard_data (){
    axios.get("/getdata").then((response)=>{
        data_message = response.data;
        new_data = response.data;
        getinformation();
    });
}
// INFORMATION FROM INDEX HTML
let userAccount = document.querySelector(".userName");
let body_message = document.querySelector(".body-messege");
let text = document.getElementById("message");
const btn_send = document.querySelector("#send");
btn_send.addEventListener("click", showMessage);
//call function to get all information:                           
loard_data();
// method to call function again and again 