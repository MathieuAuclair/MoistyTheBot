const Discord = require("discord.js");
const client = new Discord.Client();
const token = '****************************';
const mysql = require("mysql");
const membership = require("./membership.js");
const connection = require("./connection.js");

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
	else if(action === ".rmv"){
		removeFromKnowledge(question);
	}
});

function createSafeSqlQuestion(question){
	var safeQuestion = question.substring(5, question.length);
	//need to create regex
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
//there is too much repetition, need optimization
//check to create delegate function, and maybe node library
function removeFromKnowledge(question, msg){
	connection.query("SELECT * FROM KNOWLEDGE WHERE QUESTION = '" + question + "';", function(err, result){
		if(result.length === 1)
		connection.query("DELETE FROM KNOWLEDGE WHERE QUESTION = '" + question + "';", function(){
			if(err){
				throw err;
			}
			else{
				msg.reply("thanks, i'll forget this question!");
			}
		});
		else{
			msg.reply("Sorry this question don't exist...");
		}
	});
}

client.login(token);



//create a visual GUI for management

//create a virtual shop for liscence
