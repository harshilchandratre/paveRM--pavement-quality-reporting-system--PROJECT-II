import React from 'react'
import './Chat.css'

const Chat = () => {

    // script for chatapp starts here------------------>>>

    const chatButton = document.getElementById("chat-button");
    const chatContainer = document.getElementById("chatContainer");
    const minimizeButton = document.getElementById("minimize-button");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("conversation-group");
    const sendButton = document.getElementById("SentButton");

    if (chatButton) {
        chatButton.addEventListener("click", function () {
            if (chatContainer) {
                chatContainer.classList.add("open");
                chatButton.classList.add("clicked");
            }
        });
    }

    if (minimizeButton) {
        minimizeButton.addEventListener("click", function () {
            if (chatContainer) {
                chatContainer.classList.remove("open");
                chatButton.classList.remove("clicked");
            }
        });
    }

    function createMessage(message, isUser = true) {
        const newMessage = document.createElement('div');
        newMessage.classList.add(isUser ? 'sentText' : 'botText');
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
        return newMessage;
    }

    function chatbotResponse() {
        const messages = ["Hello!", "How can I assist you?", "Let me know if you have any further questions"];
        const randomIndex = Math.floor(Math.random() * messages.length);
        const message = messages[randomIndex];
        const botMessage = createMessage(message, false);
        botMessage.scrollIntoView();
    }

    chatInput.addEventListener("input", function (event) {
        if (event.target.value) {
            sendButton.classList.add("svgsent");
        } else {
            sendButton.classList.remove("svgsent");
        }
    });

    chatInput.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            const message = chatInput.value;
            chatInput.value = "";
            const userMessage = createMessage(message);
            userMessage.scrollIntoView();
            setTimeout(chatbotResponse, 1000);
            sendButton.classList.add("svgsent");
        }
    });

    if (sendButton) {
        sendButton.addEventListener("click", function () {
            const message = chatInput.value;
            chatInput.value = "";
            const userMessage = createMessage(message);
            userMessage.scrollIntoView();
            setTimeout(chatbotResponse, 1000);
            sendButton.classList.add("svgsent");
        });
    }

    // -----<<<--------script for chatapp ends here--- 

    return (
        <div>
            <div class="chat-board chatbot chat new trending"></div>
            <div class="frame-content">
                <div class="widget-position-right sidebar-position-right onlyBubble" id="chatContainer">

                    <div class="chat no-clip-path chrome moveFromRight-enter-done">
                        <div class="chat-header project-online" style="color: rgb(255, 255, 255); background: linear-gradient(135deg, rgb(42, 39, 218) 0%, rgb(0, 204, 255) 100%);">
                            <h2 class="oneline"><span>Hi there!</span></h2>
                            <button class="material-icons exit-chat ripple tidio-1s5t5ku" id="minimize-button" type="button" aria-label="Minimize" style="color: rgb(255, 255, 255);">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" id="ic-minimize">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
                                </svg>
                                <span>Minimize</span>
                            </button>
                            <div class="offline-message" style="background-image: linear-gradient(135deg, rgba(42, 39, 218, 0.72) 0%, rgba(0, 204, 255, 0.72) 100%);">
                                <span class="online"><span>We are online</span></span>
                            </div>
                        </div>
                        <div id="conversation-group" role="log">
                            <div id="messages" aria-live="polite" aria-atomic="false" data-testid="messagesLog">
                                <div class="message message-operator  ">
                                    <span class="message-content">Hi</span>
                                </div>
                                <div class="message message-operator bots-quick-replies">
                                    <div class="button-wrapper">

                                    </div>
                                </div>
                            </div><div id="conversation-scroll">
                                <div style="top: 0px; height: 55.8952px;"></div>
                            </div>
                        </div>
                        <div class="input-group ">
                            
                            <div class="drag-active-wrapper footer-input-wrapper">
                                <textarea id="chat-input" rows="1" placeholder="Hit the buttons to respond" aria-label="New message" data-testid="newMessageTextarea"></textarea>

                                <button id="SentButton" class="send-icon" title="SentButton" type="button">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve" >
                                        <path fill="#d7d7d7" d="M22,11.7V12h-0.1c-0.1,1-17.7,9.5-18.8,9.1c-1.1-0.4,2.4-6.7,3-7.5C6.8,12.9,17.1,12,17.1,12H17c0,0,0-0.2,0-0.2c0,0,0,0,0,0c0-0.4-10.2-1-10.8-1.7c-0.6-0.7-4-7.1-3-7.5C4.3,2.1,22,10.5,22,11.7z" ></path>
                                    </svg> */}
                                </button>

                            </div>
                        </div>
                    </div>

                </div>
                <div id="chat-button" data-testid="widgetButton" class="chat-closed mobile-size__medium">
                    <div class="buttonWave"></div>
                    <button type="button"
                        id="button-body"
                        data-testid="widgetButtonBody"
                        class="chrome"
                        tabindex="0"
                        aria-label="Open chat widget"
                        style="background: linear-gradient(135deg, rgb(42, 39, 218), rgb(0, 204, 255)); box-shadow: rgba(0, 77, 255, 0.5) 0px 4px 24px;">
                        <i class="material-icons type1 for-closed active" style="color: rgb(255, 255, 255);">
                            <svg id="ic_bubble" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
                                <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                        </i>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chat