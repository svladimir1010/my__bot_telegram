"use strict";

const TelegramlBot = recuire("node-telegram-bot-api"),
	request = require("request"),
	//нативный модуль ноды работающий с файлами на сервере
	fs = require("fs"),
	// Bot: CapBoss_bot and my__bot_telegram
	token = "468088216:AAGH2J2b0wpnuCc9Y3k7wiV1iZsisPXnd3c",
	bot = new TelegramlBot(token, { polling: true });

bot.on("message", function(msg) {
	const id = msg.from.id,
		_messageText = msg.text,
		messageText = _messageText.toLowerCase();

	if (messageText === "привет") {
		bot.sendMessage(id, 'Привет, я бот - чем могу помочь?');
	}
});
