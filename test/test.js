require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.MOISTY;
const moduleManager = require("../modules/manager.js");
const assert = require("assert");

console.log("MAKE SURE MOISTY IS OFFLINE!");


//init sql setup
moduleManager.sql.connect();

//make a query in database
moduleManager.sql.connection.query("select * from CLIENT", function(err, result){
	if(err){
		throw err;
	}

	//assert database
	assert.deepEqual(result[0].EMAIL, "JohnDoe@mail.com");
});



client.login(token);

client.on('ready', () => {


	//confirm login
	console.log("MOISTY:200");

	//Assert
	//assert.deepEqual(moduleManager.sqlString("sample text"), "");

	//terminate the session
	process.exit();
});




