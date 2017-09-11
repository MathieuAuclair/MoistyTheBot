const sqlstring = require("sqlstring");
const pool = require("./sqlPool.js");
var connection = pool.getPool();

function setup(){
	this.makeRequest = function(requestName, param, callBack){
		var secureParam;
		if(param == null){
			secureParam = "";
		} else{
			secureParam = this.formatString(param);
		}
		var secureRequestName = this.formatString(requestName);
		connection.getConnection(function(connectionErr, conn){
			if(connectionErr){
				throw connectionErr;
			}
			connection.query("SELECT SQLQUERY FROM QUERYLIST WHERE NAME = " + secureRequestName,function(err, res){
				if(err){
					throw err;
				} else{
					connection.query(res[0].SQLQUERY + secureParam, function(error, result){
						callBack(result);
						return;
					});
				}
			});
		});
	},
	this.formatString = function(string){
		return sqlstring.escape(string);	
	}
}

module.exports = new setup();
