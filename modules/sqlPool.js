require("dotenv").config();
console.log("MAKE SURE ENV VARIABLES ARE SETS " + process.env.MYSQL_USER);
const mysql = require('mysql');
var pool;


module.exports = {
    getPool: function () {
      if (pool) return pool;
      pool = mysql.createPool({
        host     : process.env.MYSQL_HOST,
        user     : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWORD,
        database : process.env.MYSQL_DATABASE
      });
      return pool;
    }
};
