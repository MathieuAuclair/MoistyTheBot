require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.MOISTY;
const moduleManager = require("../modules/manager.js");
const assert = require("assert");

console.log("MAKE SURE MOISTY IS OFFLINE!");

client.login(token);

client.on('ready', () => {
	//confirm login
	console.log("MOISTY:200");
	
	//Assert

	//assert.deepEqual(moduleManager.sqlString("sample text"), "");

	//terminate the session
	process.exit();
});




