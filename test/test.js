require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.MOISTY;
const moduleManager = require("../modules/manager.js");
const callback = require("../modules/callback.js");
const assert = require("assert");

//check .env value
assert.notDeepEqual(null, token, "Bot token is null, please change it in .env");
assert.notDeepEqual(null, process.env.MYSQL_HOST, "Host is null, please change it in .env");
assert.notDeepEqual(null, process.env.MYSQL_USER, "User is null, please change it in .env");
assert.notDeepEqual(null, process.env.MYSQL_PASSWORD, "Password is null, please change it in .env");
assert.notDeepEqual(null, process.env.MYSQL_DATABASE, "Database is null, please change it in .env");

//test manager.js
for(i=0; i<500; i++){
moduleManager.webProxy.getAllClient(new callback(
        function(res){
            assert.notDeepEqual(null, res);
        },
        function(err){
            throw err;
        })
    );
}

//set a reminder for the log 
console.log("MAKE SURE MOISTY IS OFFLINE!");

//login on discord service
client.login(token);

client.on('ready', () => {
	console.log("MOISTY:200");
	process.exit();
});


