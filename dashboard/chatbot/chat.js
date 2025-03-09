document.getElementById('send-button').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        addMessage('You: ' + userInput);
        document.getElementById('user-input').value = ''; // Clear input field
        botResponse(userInput); // Call the bot response function
    }
});

document.getElementById("user-input").addEventListener('keypress', (key) => {
    if (key.key === "Enter") {
        const userInput = document.getElementById('user-input').value;
        if (userInput) {
            addMessage('You: ' + userInput);
            document.getElementById('user-input').value = ''; // Clear input field
            botResponse(userInput); // Call the bot response function
        }
    }
});

function addMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function botResponse(userInput) {
    const data = `user_input=${encodeURIComponent(userInput)}`;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            // Append the bot's response to the chat box
            const response = this.responseText;
            addMessage('Bot: ' + response);
        }
    });

    xhr.open('POST', 'https://intellichat-ai-chatbot.p.rapidapi.com/chat');
    xhr.setRequestHeader('x-rapidapi-key', '535d8674a3mshd8fb93551cb94b0p1861c6jsn65383b64d678');
    xhr.setRequestHeader('x-rapidapi-host', 'intellichat-ai-chatbot.p.rapidapi.com');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.send(data); // Send user input to the API
}
