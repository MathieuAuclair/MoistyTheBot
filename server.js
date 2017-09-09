require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.MOISTY;
const moduleManager = require("./modules/manager.js");

client.on('ready', () => {
  console.log("==== Moisty is Online! ====");
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	var isMsgFromUser = msg.author.username != client.user.username;
	var isMsgForMoisty = msg.content.indexOf(".m status") != -1;

	if(isMsgFromUser && isMsgForMoisty) {
		msg.reply("sorry server are not available!");
	}
});

client.login(token);
