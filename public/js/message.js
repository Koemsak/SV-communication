


// const IP = "192.168.88.24";
// const PORT = 3000;
// const URL_REQUEST = "http://" + IP + ":" + PORT;


const URL_REQUEST = "https://sv1communication.herokuapp.com";

let user_login = localStorage.getItem("username");

// MESSAGE CHAT
let scrollDown = true;
function showMessage(messages) {
    chat_box.firstElementChild.remove();
    let container = document.createElement("div");
    container.className = "container";
    
    for (let data of messages.data) {
        let outgoing = document.createElement("div");
        outgoing.className = "chat outgoing";
        let incoming = document.createElement("div");
        incoming.className = "chat incoming";
        let details = document.createElement("div");
        details.className = "details";
        let p = document.createElement("p");
        let h5 = document.createElement("h5");
        if (data.name === user_login) {
            p.textContent = data.text;
            h5.textContent = data.name.toUpperCase();
            details.appendChild(p); 
            outgoing.appendChild(details);
            outgoing.appendChild(h5);
            container.appendChild(outgoing);
            
            if (data.bold === true) {
                p.style.fontWeight = "bold";
            } else {
                p.style.fontWeight = "normal";
            }
            if (data.italic === true) {
                p.style.fontStyle = "italic";
            } else {
                p.style.fontStyle = "normal";
            }
        } else {
            p.textContent = data.text;
            h5.textContent = data.name.toUpperCase();
            details.appendChild(p);
            incoming.appendChild(h5);
            incoming.appendChild(details);
            container.appendChild(incoming);

            if (data.bold === true) {
                p.style.fontWeight = "bold";
            } else {
                p.style.fontWeight = "normal";
            }
            if (data.italic === true) {
                p.style.fontStyle = "italic";
            } else {
                p.style.fontStyle = "normal";
            }
        }
    }
    chat_box.appendChild(container);
}

function loadMessage() {
    username.textContent = user_login.toUpperCase();
    axios.get(URL_REQUEST + "/getdata").then(showMessage);
    if (scrollDown) {
        chat_box.scrollTop = chat_box.scrollHeight - chat_box.clientHeight;
    }
}

function send_data() {
    scrollDown = true;
    if (input_message.value !== "") {

        let allInfo = {
            name: user_login,
            text: input_message.value,
            bold: boldClicked,
            italic: italciClicked
        }
        axios.post(URL_REQUEST + "/add", allInfo).then((new_response) => {
            console.log(new_response.data);
        });
        input_message.value = "";
    }
    send_btn.style.background = "#33333380";
    send_btn.style.cursor = "auto";
}

let send_btn = document.querySelector("#send");
send_btn.addEventListener("click", send_data);


function focus() {
    if (input_message.value.length > 0) {
        send_btn.style.background = "#333";
        send_btn.style.cursor = "pointer";
    } else {
        send_btn.style.background = "#33333380";
        send_btn.style.cursor = "auto";
    }
}

let input_message = document.querySelector("#txtMess");
input_message.addEventListener("keyup", focus);


// BOLD MESSAGE IN CHAT
let boldClicked = false;
let boldNumber = 0;
function boldTxt () {
    boldNumber += 1;
    input_message.style.fontWeight = "bold";
    btnBold.style.background = "#333";
    if (boldNumber % 2 === 0) {
        btnBold.style.background = "#33333380";
        input_message.style.fontWeight = "normal";
        boldClicked = false;
    } else {
        boldClicked = true;
    }
}

let btnBold = document.querySelector(".bold");
btnBold.addEventListener("click", boldTxt);


// ITALIC MESSAGE IN CHAT
let italciClicked = false;
let italicNumber = 0;
function italicTxt () {
    italicNumber += 1;
    input_message.style.fontStyle = "italic";
    btnItalic.style.background = "#333";
    if (italicNumber % 2 === 0) {
        input_message.style.fontStyle = "normal";
        btnItalic.style.background = "#33333380";
        italciClicked = false;
    } else {
        italciClicked = true;
    }
}

let btnItalic = document.querySelector(".italic");
btnItalic.addEventListener("click", italicTxt);


// EMOJI BTN   

let btnEmoji = document.querySelector(".emoji");
const picker = new EmojiButton();
document.addEventListener("DOMContentLoaded", () => {
    picker.on("emoji", emoji => {
        input_message.value += emoji;
    });
    btnEmoji.addEventListener("click", () => {
        picker.togglePicker(btnEmoji);
        send_btn.style.background = "#333";
        send_btn.style.cursor = "pointer";
    });
});

// THE INFORMATION OF MESSAGE HTML

let username = document.querySelector(".details span");
let chat_box = document.querySelector(".chat-box");




setInterval(loadMessage, 1000);

chat_box.addEventListener("scroll", () => {
    scrollDown = false;
})
