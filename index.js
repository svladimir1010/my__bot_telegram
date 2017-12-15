"use strict";

const TelegramBot = require("node-telegram-bot-api"),
request = require("request"),
	//нативный модуль ноды работающий с файлами на сервере
	fs = require("fs"),
	// Bot: CapBoss_bot and my__bot_telegram
	token = "468088216:AAGH2J2b0wpnuCc9Y3k7wiV1iZsisPXnd3c",
	bot = new TelegramBot(token, { polling: true });

	bot.on("message", function(msg) {
		const id = msg.from.id,
		_messageText = msg.text,
		messageText = _messageText.toLowerCase();

		if (messageText === "привет") {
			bot.sendMessage(id, 'Привет, я бот - нужна помощь?');
		}
		
	});


/* else if (messageText === 'курс') {
			//api приват 24 - курс валют
			request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function(error, response, body) {

				if (!error && response.statusCode === 200) {

					const data = JSON.parse(body);
					data.forEach(function(value, index) {
					bot.sendMessage(id,(`Валюта: ${value.ccy} | Код национальной валюты: ${value.base_ccy} | Покупка: ${value.buy} | Продажа: ${value.sale}`))
					//bot.sendMessage(id,(`Валюта: ${value.ccy} | Код национальной валюты: ${value.base_ccy} | Покупка: ${value.buy}`))
					});
				}
			})
		}*/