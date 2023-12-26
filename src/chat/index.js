import utils from '@/utils/utils';

const injectChat = async (botId) => {
    if ((await utils.tryBot(botId)).status != "ok") return;

    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "./fab.css";
    document.head.appendChild(cssLink);

    const newDiv = document.createElement('div');
    newDiv.className = 'fab-wrapper';
    newDiv.innerHTML = `
        <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />
        <label class="fab" for="fabCheckbox">
            <span class="fab-dots fab-dots-1"></span>
            <span class="fab-dots fab-dots-2"></span>
            <span class="fab-dots fab-dots-3"></span>
        </label>
        <div class="fab-wheel">
            Ciao
        </div>
    `;
    document.body.appendChild(newDiv);
};

function openChat() {
    alert('FAB Clicked!');
}

export default {
    injectChat,
    openChat
};
