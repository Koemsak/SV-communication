

// const IP = "192.168.88.29";
// const PORT = "5000";
// const URL_REQUEST = "http://" + IP + ":" + PORT;

const URL_REQUEST = "https://sv1communication.herokuapp.com";

let user_login = localStorage.getItem("username");
// MESSAGE CHAT


function showMessage() {
    username.textContent = user_login.toUpperCase();
    axios.get("/getdata").then((response) => {
        let container = document.createElement("div");
        container.className = "container";
        for (let data of response.data) {
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
            } else {
                p.textContent = data.text;
                h5.textContent = data.name.toUpperCase();
                details.appendChild(p);
                incoming.appendChild(h5);
                incoming.appendChild(details);
                container.appendChild(incoming);
            }
        }
        chat_box.appendChild(container);
    })
}

function loadMessage() {
    let container = chat_box.firstElementChild;
    container.remove();
    showMessage();
}

function send_data() {
    if (input_message.value !== "") {
        let allInfo = {
            name: user_login,
            text: input_message.value
        }
        axios.post(URL_REQUEST + "/add", allInfo);
        loadMessage();
        input_message.value = "";
    }
}





// THE INFORMATION OF MESSAGE HTML


let username = document.querySelector(".details span");
let chat_box = document.querySelector(".chat-box");
let input_message = document.querySelector("#txtMess");

let send_btn = document.querySelector("#send");
send_btn.addEventListener("click", send_data);

loadMessage();

setInterval(loadMessage, 1500);