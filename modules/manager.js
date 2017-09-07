/** THIS MANAGER CONTAIN ALL FEATURES
 *	this is the manager to connect all the script
 *	together, it get the work done.
*/

function Manager(){
	this.getSafeSqlString = require("./sqlString.js");
	this.sql = require("sqlSetup.js");
}
module.exports = Manager;
