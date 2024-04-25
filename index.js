const TelegramBot = require('node-telegram-bot-api');

const token = '6548208739:AAGUTCoUy_Dn-8eobkIaZBwKzaeb7NbVDZo';

const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
    const chatId = msg.chat.id
    console.log(msg.chat.first_name);
    
    if(msg.text === "/start"){
        bot.sendMessage(chatId, "✋ Salom " + msg.chat.first_name + " bizning botimizga xush kelibsiz! 👍👍")
    }else if (msg.text === "/help") {
        bot.sendMessage(chatId, "Assallomu aleykum sizga qanday yordam bera olaman")
    }
    else{
        bot.sendMessage(chatId, "Xato ma'lumot kiritdingiz")
    }
  });