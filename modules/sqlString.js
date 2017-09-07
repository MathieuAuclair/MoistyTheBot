const sql = require('sqlstring');

function getSqlSafeString(query){
	//format query to fit in MySQL
	var format = sql.escape(query);	
	return format;
}
module.exports = getSqlSafeString;
