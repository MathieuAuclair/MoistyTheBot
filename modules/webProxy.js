const sqlstring = require("sqlstring");
const post = require("./sqlRequest.js");

function setup(){
    this.getAllClient = function(callback){
        post.request("SELECT * FROM CLIENT", callback);
    }
}

module.exports = new setup();
