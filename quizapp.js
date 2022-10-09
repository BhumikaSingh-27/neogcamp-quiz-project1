var readLineSync = require("readline-sync");
var username = readLineSync.question("What's your name?\n");
console.log("Welcome, " + username + " to DO YOU KNOW Bhumika?")
//console.log("Are you readyy")

var score = 0;

var question = [{
  question: "Where do I live? ",
  answer: "Patna"
},
{
  question: "What is my nickname? ",
  answer: "bittu"
},
{
  question: "Which company I work for? ",
  answer: "Infosys"
},
{
  question: "My favourite evening snacks would be? ",
  answer: "samosa"
},
{
  question: "What is my birth-date? ",
  answer: "27"
},
{
  question: "Which is my dream place to visit in India? ",
  answer: "kashmir"
}, {
  question: "Name my all time favourite sweet? ",
  answer: "rasgulla"
}, {
  question: "Where would I like to go? A movie, shopping mall, long drive? ",
  answer: "long drive"
}, {
  question: "A cricketer I admire the most? ",
  answer: "dhoni"
}, {
  question: "My favourite seasonal fruit? ",
  answer: "mango"
}
]

var highScore = [{
  name: "Bhumika",
  score: 10
},
{
  name: "Savita",
  score: 9
}
]
function play(question, answer) {
  var userAns = readLineSync.question(question)

  if (userAns.toUpperCase() == answer.toUpperCase()) {
    console.log("You're Right!");
    score = score + 1;
    console.log("current score: " + score);
    console.log("--------------------");
  } else {
    console.log("You're Wrong!")
    console.log("current score: " + score);
    console.log("--------------------");
  }
}

for (i = 0; i < question.length; i++) {
  play(question[i].question, question[i].answer)
}

if (score > 6) {
  console.log("YAY!, You Scored: " + score + "\n");
} else {
  console.log("Your final score is: " + score + "\n");
}

console.log("Check out the high scores. If you should be there, send me a screenshot, I will update it!")
for (i = 0; i < highScore.length; i++) {
  console.log(highScore[i].name + " : " + highScore[i].score)
}