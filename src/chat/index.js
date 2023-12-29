import sender from "./sender";
import marked from './marked';
import utils from "@/utils/utils";

const html = `
    <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />
    <label class="fab" for="fabCheckbox">
        <span class="fab-dots fab-dots-1"></span>
        <span class="fab-dots fab-dots-2"></span>
        <span class="fab-dots fab-dots-3"></span>
    </label>
    <div class="fab-wheel">
        <div class="fab-chat-box">
            <div class="fab-messages">
                <ul id="chat"></ul>
            </div>
            <div class="fab-sender">
                <div class="sender-container">
                    <input type="text" id="input-text" />
                    <button id="circular-button">
                        <span class="btn-icon">+</span>
                        <span class="btn-loader"></span>
                    </button>
                </div>
            </div>
        <div>
    </div>
`;

var threadId = false;
var botId = false;

const injectChat = async (botIdInjected) => {
    botId = botIdInjected;
    if ((await utils.tryBot(botId)).status != "ok") return;

    addCss("./fab.css");
    addCss("./chat.css");

    const newDiv = document.createElement("div");
    newDiv.id = "fabContainer";
    newDiv.className = "fab-wrapper";
    newDiv.innerHTML = html;
    document.body.appendChild(newDiv);

    const button = document.getElementById('circular-button')
    button.classList.add('btn-loading');
    sender.sendMessage(botId, threadId, "Ciao", addMessage);
    button.addEventListener("click", sendMessageByForm);
};

const addCss = (href) => {
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = href;
    document.head.appendChild(cssLink);
};

const addMessage = (message, bot = true) => {
    const chat = document.getElementById("chat");
    const msg = document.createElement("li");
    if (bot) msg.style.marginRight = "75px";
    else msg.style.marginLeft = "75px";
    msg.innerHTML = `
        <h4>${bot ? "Bot" : "Utente"}</h4>
        <p>${marked.parseMd(message)}</p>
    `;
    document.getElementById('circular-button').classList.remove('btn-loading');
    chat.appendChild(msg);
    sender.scrollToBottom(chat);
};

const sendMessageByForm = () => {
    const input = document.getElementById("input-text");
    if (input.value != "") {
        addMessage(input.value, false);
        document.getElementById('circular-button').classList.add('btn-loading');
        sender.sendMessage(botId, threadId, input.value, addMessage);
        input.value = "";
    }
};

export default {
    injectChat
};
