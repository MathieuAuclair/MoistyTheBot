require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.MOISTY;
const moduleManager = require("../modules/manager.js");
const assert = require("assert");

//set a reminder for the log 
console.log("MAKE SURE MOISTY IS OFFLINE!");

//assert
assert.deepEqual(moduleManager.sql.makeRequest("getClient","JohnDoe@mail.com")[0].EMAIL, "JohnDoe@mail.com");

//login on discord service
client.login(token);

client.on('ready', () => {

	//confirm login
	console.log("MOISTY:200");

	//terminate the session
	process.exit();
});


