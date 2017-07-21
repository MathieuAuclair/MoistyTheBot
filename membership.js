const connection = require("./connection.js");
const sql = require("mysql");
var checkValidMembership = checkValidId();

//need to check with api
function checkValidId(serverId){
	connection.query("SELECT * FROM CLIENT_SERVER", function(err, res){
		if(err){
			throw err;
		}
		else if(res.length == 1){
			return true;
		}
		else{
			console.log("acces refused! ID: " + serverId);
			return false;
		}
	});
}

module.exports(checkValidMembership);
