require("dotenv").config();
const mysql = require('mysql');
var pool;

module.exports = {
    getPool: function () {
      if (pool) return pool;
      pool = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : process.env.PASSWORD,
        database : 'DISCORD'
      });
      return pool;
    }
};
