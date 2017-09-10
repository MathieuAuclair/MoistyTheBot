/** THIS MANAGER CONTAIN ALL FEATURES
 *	this is the manager to connect all the script
 *	together, it get the work done.
*/ 

function Manager(){
	this.init = function(){
		//init sql setup
		this.sql.connect();
		console.log(this.sql.makeRequest("getClient", "Joe"));
	},
	this.sql = require("./sqlSetup.js")
}

module.exports = new Manager();
