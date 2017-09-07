const mysql = require("mysql");

function sqlSetup(){
	this.mysql = require("mysql"),
	this.connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password : process.env.PASSWORD,
		database : 'DISCORD'
	})
}
module.exports = new sqlSetup();
