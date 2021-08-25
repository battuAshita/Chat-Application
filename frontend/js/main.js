const chatForm = document.getElementById('chat-form');
const chatWindow = document.querySelector('.chat-messages');
const socket = io();

//Get username
const username = Qs.parse(location.search, {
    ignoreQueryPrefix: true
})

//Join chatroom


//Capture the message sent
socket.on('message', function(message) {
    console.log(message);
    displayMessage(message);

    //Scroll down feature for the chat window
    chatWindow.scrollTop = chatWindow.scrollHeight;
});

chatForm.addEventListener('submit', function(e) {
    e.preventDefault();

    //Get the message
    const msg = e.target.elements.msg.value;

    //Send message to the server
    socket.emit('message', msg);

    //Clear the typing space after sending message
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();

});

//Display the message on the chat screen
function displayMessage(message) {
    const newDiv = document.createElement('newDiv');
    newDiv.classList.add('message');
    newDiv.innerHTML = `<p class="meta">${message.username} &nbsp<span>${message.time}</span></p> 
    <p class="text">
        ${message.text}
    </p>`;

    document.querySelector('.chat-messages').appendChild(newDiv);

}