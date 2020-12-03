const Discord = require("discord.js");
const fs = require('fs');
const date = require('date-and-time');

const bot = new Discord.Client();
const now = new Date();

var settings = require("./settings.js");
var channel = require("./settings.js");
var playlist = "nowplaying.txt"


bot.on("ready", function () {
	console.log("ready");
	console.log("Stream starded on - " + date.format(now, 'DD/MM/YYYY ') + ("starting live Playlist...."));
		bot.channels.cache.get(settings.discord_channel).send("Stream starded - " + date.format(now, 'DD/MM/YYYY ') + ("Playlist started"));



});

fs.watchFile(playlist, (eventType, filename) => {
  fs.readFile(playlist, 'utf-8', (err, data) => {

    let lines = data.trim().split("\n")
    console.log(lines[lines.length - 1])
	bot.channels.cache.get(settings.discord_channel).send(lines)
  });
});


bot.login(settings.bot_token);
