/** THIS MANAGER CONTAIN ALL FEATURES
 *	this is the manager to connect all the script
 *	together, it get the work done.
*/ 
function Manager(){
	this.sqlString = require("./sqlString.js"),
	this.sql = require("./sqlSetup.js"),
	this.sqlQuery = require("./sqlQuery.js")

}
/*
var test = new Manager();
test.sql.connect();
test.sql.connection.query("select * from CLIENT", function(err, result){
	if(err){
		throw err;
	}
	console.log(JSON.stringify(result));
});
*/


module.exports = new Manager();
