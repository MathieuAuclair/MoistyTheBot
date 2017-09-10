require("dotenv").config();
const mysql = require("mysql");

function setup(){
	this.connection = mysql.createConnection({
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USER,
		password : process.env.MYSQL_PASSWORD,
		database : process.env.MYSQL_DATABASE
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
