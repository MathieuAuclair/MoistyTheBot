require("dotenv").config();
const mysql = require("mysql");

function setup(){
	this.connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password : process.env.PASSWORD,
		database : 'DISCORD'
	}),
	this.connect = function(){
		this.connection.connect(function(err){
			if(err){
				throw err;
			}
		});
	}
}

module.exports = new setup();
