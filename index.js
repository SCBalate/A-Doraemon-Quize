var readlineSync=require("readline-sync");
const chalk = require('chalk');
 
console.log(chalk.blue('Hello buddy!'));
var score=0;
var userName=readlineSync.question("what is your name?");
console.log("welcome " + userName + " Do you know Doraemon?,lets see how much do you know about him");
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    console.log("right!");
    score=score+1;
  }else{
console.log("wrong!");
score=score-1;

  }
}
console.log('your score is',score);
console.log("----------");
var questions=[{
  question:"who is Doraemon? ",
  answer:"a robot cat"
},
{
  question:"where is he came from? ",
answer:"future"
},{
question:"who is Doraemon's best friend? ",
answer:"nobita"
},{
  question:"who is nobita's crush?",
  answer:"shizuka"
},
{
  question:"who is richest guy in Doraemon?",
  answer:"sunio"
},
{
  question:"who is fatty guy in Doraemon?",
  answer:"Gian"
}
];
 for(var i=0;i<questions.length;i++) {
   var currentQuestion=questions[i];
   play (currentQuestion.question,currentQuestion.answer);
 }
console.log("Wow ! your score is",score);
