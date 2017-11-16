/** THIS MANAGER CONTAIN ALL FEATURES
 *	this is the manager to connect all the script
 *	together, it get the work done.
*/ 

function Manager(){
	this.postman = require("./sqlRequest.js"),
    this.webProxy = require("./webProxy.js")
}

module.exports = new Manager();
