require('dotenv').config({path: '../.env'})
console.log("MAKE SURE ENV VARIABLES ARE SETS " + process.env.MYSQL_USER);
const mysql = require('mysql');
var pool;

var postman = function() {
    this.pool = function () {
        if (pool) 
            return pool;
        pool = mysql.createPool({
            host     : process.env.MYSQL_HOST,
            user     : process.env.MYSQL_USER,
            password : process.env.MYSQL_PASSWORD,
            database : process.env.MYSQL_DATABASE
        });
        return pool;
    },
    this.request = function(query, callback){
        var connection = new this.pool();
        connection.query(query, function(err, res){
            try{
                if(err){
                    callback.onError(err);
                } else {
                    callback.onResponse(res);
                }
            } catch (e){
                throw e
            }
        });
    }
}

module.exports = new postman();
