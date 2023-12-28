import utils from '@/utils/utils';

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
                <ul id="chat">
                    <li class="you">
                        <div class="entete"><h2>Vincent</h2></div>
                        <div class="triangle"></div>
                        <div class="message">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                    </li>
                    <li class="me">
                        <div class="entete"><h2>Vincent</h2></div>
                        <div class="triangle"></div>
                        <div class="message">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                    </li>
                    <li class="you">
                        <div class="entete"><h2>Vincent</h2></div>
                        <div class="triangle"></div>
                        <div class="message">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                    </li>
                    <li class="you">
                        <div class="entete"><h2>Vincent</h2></div>
                        <div class="triangle"></div>
                        <div class="message">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                    </li>
                </ul>
            </div>
            <div class="fab-sender">
                <input type="text" />
                <button>Invia</button>
            </div>
        <div>
    </div>
`;

const injectChat = async (botId) => {
    if ((await utils.tryBot(botId)).status != "ok") return;

    addCss("./fab.css");
    addCss("./chat.css");

    const newDiv = document.createElement('div');
    newDiv.id = 'fabContainer';
    newDiv.className = 'fab-wrapper';
    newDiv.innerHTML = html;
    document.body.appendChild(newDiv);
};

const addCss = (href) => {
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = href;
    document.head.appendChild(cssLink);
};

export default {
    injectChat
};
