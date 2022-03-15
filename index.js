var readlineSync = require('readline-sync');

console.log("*** WELCOME TO MARVEL QUIZ ***\n\n");
var name = readlineSync.question('What is your name?\t');

console.log("Welcome " + name);
var highscore={
  name:"Alen",
  value:10
}

console.log("\n\n ***If you answer 5 right you go to level 2, then 3 right you go to level 3***\n\n");

var question1 = {
  question: "1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe \n\na. 2005\nb. 2008\nc. 2010\nd. 2012\n",
  answer: "B"
}
var question2 = {
  question: "2.What is the name of Thor’s hammer? \n\na. Vanir\nb. Mjolnir\nc. Aesir\nd. Norn\n",
  answer: "B"
}
var question3 = {
  question: "3.What is Captain America’s shield made of? \n\na.Adamantium\nb.Vibranium\nc.Promethium\nd.Carbonadium\n",
  answer: "B"
}
var question4 = {
  question: "4.Before becoming Vision, what is the name of Iron Man’s A.I. butler? \n\na. H.O.M.E.R.\nb. J.A.R.V.I.S.\nc. A.L.F.R.E.D.\nd. M.A.R.V.I.N.\n",
  answer: "B"
}
var question5 = {
  question: "5.What is the real name of the Black Panther?\n\na. T’Challa\nb. M’Baku\nc. N’Jadaka\nd. N’Jobu\n",
  answer: "A"
}
var question6 = {
  question: "6.What is Deadpool’s real name?\n",
  answer: "Wade Wilson"
}
var question7 = {
  question: "7.Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?\n",
  answer: "Collector"
}
var question8 = {
  question: "8.Who is Black Panther’s sister?\n",
  answer: "Nakia"
}
var question9 = {
  question: "9.In which film do we finally learn the backstory behind how Nick Fury lost his eye?\n",
  answer: "Captain Marvel"
}
var question10 = {
  question: "10.Who was the villain of ‘Thor: The Dark World’?\n",
  answer: "Malekith"
}
var question11 = {
  question: "11.What species is Loki revealed to be?\n",
  answer: "Frost Giant"
}
var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11]
var score = 0
function game(ques) {
  var useranswer = readlineSync.question(ques.question);
  console.log("YOUR ANSWER IS " + useranswer);
  if (useranswer.toUpperCase() === ques.answer.toUpperCase()) {
    score = score + 1;
    console.log("you are RIGHT!!!\n")
    console.log("YOU HAVE SCORED " + score);
    console.log("-------------------------------------------------------------------------------------");
  }
  else {
    score = score - 1;
    console.log("you are WRONG!!!");
    console.log("YOU HAVE SCORED " + score);
    console.log("-------------------------------------------------------------------------------------");
  }
}
for (let i = 0; i < 6; i++) {
    if (score===5){
      console.log("YOU HAVE CLEARED LEVEL 1\n\n");
      console.log("-------------------------------------------------------------------------------------");
      console.log("-------------------------------------------------------------------------------------");
      for(let j=5; j<9 ; j++){
        if (score ===8){
          console.log("YOU CLEARED LEVEL 2\n\n");
          console.log("-------------------------------------------------------------------------------------");
          console.log("-------------------------------------------------------------------------------------");
          for (let k = 7; k < questions.length; k++){
            if(score===11){
              console.log("\tGREAT GAME");
              console.log("-------------------------------------------------------------------------------------");
              console.log("-------------------------------------------------------------------------------------");
            }
            else
              game(questions[k]) 
          }
        }
        else
          game(questions[j])
      }
    }
     else
     game(questions[i])
  }

console.log("YOU HAVE SCORED :  " + score);
if(score>highscore.value){
  console.log("YOU ARE THE HIGHSCORER \n PLEASE SEND A SCREENSHORT OF YOUR SCORE");
}