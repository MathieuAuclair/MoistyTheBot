
function sqlSetup(){
	this.mysql = require("mysql"),
	this.connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password : process.env.PASSWORD,
		database : 'DISCORD'
	})
}
module.exports = sqlSetup;
