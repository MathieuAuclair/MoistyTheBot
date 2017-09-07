/** THIS MANAGER CONTAIN ALL FEATURES
 *	this is the manager to connect all the script
 *	together, it get the work done.
*/
const sqlSetup = require("./sqlSetup.js");
const sqlSafeString = require("./sqlString.js");

function Manager(){
	this.sqlString = function(query){
		return sqlSafeString(query);
	},
	this.sql = function(){
		return sqlSetup;
	}
}
module.exports = new Manager();
