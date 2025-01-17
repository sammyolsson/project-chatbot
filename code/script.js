// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper');
const sendBtn = document.getElementById('send-btn');

const botReply = (msg) => {
  showMessage(msg, 'bot')
};

const userReply = (msg) => {
  showMessage(msg, 'user')
};


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
 
// the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
// the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
// This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// INITAL BOT GREETING! 
const greetUser = () => {  
  showMessage("Hello there, What's your name?", 'bot');  
};

// Set up your eventlisteners here
form.addEventListener('submit', (event)=> {
  event.preventDefault() // Prevents form to autorefresh

const nameInput = document.getElementById('name-input').value;
showMessage(nameInput, 'user');

// Bot greets nameInput and ask for what drink
chat.innerHTML += `<section class="bot-msg">
    <img src="assets/bot.png" alt="Bot" />
    <div class="bubble bot-bubble">
        <p>Nice to meet you ${nameInput}! 👋 <br><br>
        What type of drink would you like to order?</p>
    </div>
</section>`

inputWrapper.innerHTML = `
<button id="colaBtn" type="submit">Cola</button>
<button id="fantaBtn" type="submit">Fanta</button>
<button id="spriteBtn" type="submit">Sprite</button>
`;

let colaBtn = document.getElementById('colaBtn');
colaBtn.addEventListener('click', () => cola())

let fantaBtn = document.getElementById('fantaBtn');
fantaBtn.addEventListener('click', () => fanta())

let spriteBtn = document.getElementById('spriteBtn');
spriteBtn.addEventListener('click', () => sprite())

});

// User choose Cola
const cola = () => {
  userReply(`I would love to order a Cola`);
  setTimeout(() => botReply(`Great choice, Cola is amazing! Please select what kind of Cola below...`), 1000)

       inputWrapper.innerHTML =
        `<select id="select">
          <option value selected disabled>Select what kind of Cola 👇</option>
          <option value="regular">Regular</option>
          <option value="zero">Zero</option>
          <option value="vanilla">Vanilla</option>
        </select>
        <button class="selectBtn" id="colaKindBtn" type="submit">OK</button>
        `
        const colaKindBtn = document.getElementById('colaKindBtn');
        colaKindBtn.addEventListener('click', () => {
          botReply(`Thank you for your Cola-order! Close this window and your drink will be magical teleported to you 🧙‍♂️`)
        }
      )};

// User choose Fanta
 const fanta = () => {
  userReply(`I would love a Fanta`);
  setTimeout(() => botReply(`Great choice! Please select what kind of Fanta below.`), 1000)
  
  inputWrapper.innerHTML =
        `<select id="select">
          <option value selected disabled>Select what kind of Fanta 👇</option>
          <option value="regular">Regular</option>
          <option value="zero">Zero</option>
          <option value="lemon">Lemon</option>
        </select>
        <button class="selectBtn" id="fantaKindBtn" type="submit">OK</button>
        `
        const fantaKindBtn = document.getElementById('fantaKindBtn');
        fantaKindBtn.addEventListener('click', () => {
          botReply(`Thank you for your Fanta-order! Close this window and your drink will be magical teleported to you 🧙‍♂️`)
        }
)};

// User choose Sprite
const sprite = () => {
  userReply(`I would love a Sprite`);
  setTimeout(() => botReply(`Great choice! Please select what kind of Sprite below.`), 1000)
  
  inputWrapper.innerHTML =
        `<select id="select">
          <option value selected disabled>Select what kind of Sprite 👇</option>
          <option value="regular">Regular</option>
          <option value="zero">Zero</option>
          <option value="cherry">Cherry</option>
        </select>
        <button class="selectBtn" id="spriteKindBtn" type="submit">OK</button>
        `
        const SpriteKindBtn = document.getElementById('spriteKindBtn');
        spriteKindBtn.addEventListener('click', () => {
          botReply(`Thank you for your Sprite-order! Close this window and your drink will be magical teleported to you 🧙‍♂️`)
        }
)};
  
  
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
