const Discord = require("discord.js");
const client = new Discord.Client();
const token = '****************************';
const mysql = require("mysql");

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password : '*******',
	database : 'DISCORD'
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
	var action = msg.content.substring(0,4);
	var question = createSafeSqlQuestion(msg.content);
	if (action === '.lrn') {
		learnNewQuestion(question, msg)
	}
	else if(action === '.ask'){
		findAnswerInMemory(question, msg);
	}
});

function createSafeSqlQuestion(question){
	var safeQuestion = question.substring(5, question.length);
	safeQuestion 
	console.log(safeQuestion);
	return safeQuestion;
}

function findAnswerInMemory(question, msg){
	connection.query("SELECT ANSWER FROM KNOWLEDGE WHERE QUESTION = '" + question + "'", 
	function(err, result){
		if(err){throw err;}
		
		if(result.length > 0){
			msg.reply(result[0].ANSWER);
		}
		else{
			msg.reply("I don't know the answer for this question, could you tell me the answer?");
		}
	});
}

function learnNewQuestion(knowledge, msg){//json entry
	var entry = JSON.parse(knowledge);
	connection.query("INSERT INTO KNOWLEDGE (QUESTION, ANSWER, TEACHER_ID) VALUES ('" + entry.q + "', '" + entry.a + "', 12345);"),
	function(err, result){
		if(err){throw err;}
		msg.reply("sweet, I'll remeber that!");
	}
}


client.login(token);

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
