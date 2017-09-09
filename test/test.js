require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.MOISTY;
const moduleManager = require("../modules/manager.js");
const assert = require("assert");

console.log("MAKE SURE MOISTY IS OFFLINE!");


//init sql setup
moduleManager.sql.connect();
console.log("SQL connected!");

//make a query in database
moduleManager.sql.connection.query("select * from CLIENT", function(err, result, next){ 

	//assert database
	assert.deepEqual(result[0].EMAIL, "JohnDoe@mail.com");
});

//login on discord service
client.login(token);

client.on('ready', () => {

	//confirm login
	console.log("MOISTY:200");

	//terminate the session
	process.exit();
});


