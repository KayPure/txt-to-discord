const Discord = require("discord.js");
const fs = require('fs');
const date = require('date-and-time');
const readLastLines = require('read-last-lines');
const bot = new Discord.Client();
const now = new Date();

var settings = require("./settings.js");
var channel = require("./settings.js");
var playlist = "nowplaying.txt"


bot.on("ready", function () {
	console.log("ready");
	console.log("Stream ready - Starting live Playlist...." + date.format(now, 'DD/MM/YYYY'));
		bot.channels.cache.get(settings.discord_channel).send("Stream ready - Starting live Playlist...." + date.format(now, 'DD/MM/YYYY'));
});

fs.watchFile(playlist, (eventType, filename) => {
	readLastLines.read(playlist, 1)
		.then((lines) => console.log(lines) + bot.channels.cache.get(settings.discord_channel).send(lines));
});

bot.login(settings.bot_token);
