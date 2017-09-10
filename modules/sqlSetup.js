require("dotenv").config();
const mysql = require("mysql");
const sqlstring = require("sqlstring");

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
	},
	this.makeRequest = function(requestName, param){
		this.connection.query("SELECT SQLQUERY FROM QUERYLIST WHERE NAME = " + this.formatString(requestName),function(err, result){
			if(err){
				throw err;
			} else{
				this.connection.query(result[0] + this.formatString(param), function(err2, result2){
					return "test";
				
				});
			}
		});
	},
	this.formatString = function(string){
		return sqlstring.escape(string);	
	}
}

module.exports = new setup();
