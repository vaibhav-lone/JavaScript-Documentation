/*
//*******************BASIC LEVEL****************
 
( // This is a Function Consructor
function() {
  function Question(question, answer, correctAns) {
    this.question = question;
    this.answer = answer;
    this.correctAns = correctAns;
  }

  // Lets create a method in Question's prototype property to display the question in console
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + ": " + this.answer[i]);
    }
  };

  // A method for checking the correct answer in Question's prototype property
  Question.prototype.checkAns = function(ans) {
    if (ans === this.correctAns) {
      console.log("Correct Answer!");
    } else {
      console.log("Wrong answer. Try Again.");
    }
  };
  var q1 = new Question(
    "Is JavaScript the coolest programming language in the world ?",
    ["Yes", "No"],
    0
  );

  var q2 = new Question(
    "Whats the name of this course ?",
    ["css", "html", "Javascript"],
    2
  );

  var q3 = new Question(
    "What is the name of creator of this game?",
    ["Johny Bravo", "Kungfu Panda", "Dude", "Bary Allen"],
    3
  );

  var q4 = new Question(
    "What does best describe coding?",
    ["boring", "tedious", "fun", "Hard"],
    2
  );

  var questionsArr = [q1, q2, q3, q4];

  var num = Math.floor(Math.random() * questionsArr.length);

  questionsArr[num].displayQuestion();

  var user_ans = parseInt(prompt("Please enter the correct answer"));
  // here when we get the ans from prompt it will be of a 'string' data type but we want it in 'int' data type, so we use the javascript 'built-in' function 'parseInt()' to convert the string into an integer value

  questionsArr[num].checkAns(user_ans);
})(); 
*/

// ***************************EXPERT LEVEL***************************

(function() {
  function Question(quest, ans, correctAns) {
    this.quest = quest;
    this.ans = ans;
    this.correctAns = correctAns;
  }

  // Lets create a method for Question's prototype property to display the question in console
  Question.prototype.displayQuestion = function() {
    console.log(this.quest);
    for (var i = 0; i < this.ans.length; i++) {
      console.log(i + ": " + this.ans[i]);
    }
  };

  // A method for checking the correct answer
  Question.prototype.checkAns = function(ans, callback) {
    if (ans === this.correctAns) {
      var sc;
      console.log("Correct Answer!");
      sc = callback(true);
    } else {
      console.log("Wrong answer. Try Again.");
    }
    sc = callback(false);
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("Your Current Score is: " + score);
    console.log("--------------------------------");
  };
  var q1 = new Question(
    "Is JavaScript the coolest programming language in the world ?",
    ["Yes", "No"],
    0
  );

  var q2 = new Question(
    "Whats the name of this course ?",
    ["css", "html", "Javascript"],
    2
  );

  var q3 = new Question(
    "What is the name of creator of this game?",
    ["Johny Bravo", "Kungfu Panda", "Dude", "Bary Allen"],
    3
  );

  var q4 = new Question(
    "What does best describe coding?",
    ["boring", "tedious", "fun", "Hard"],
    2
  );
  var questionsArr = [q1, q2, q3, q4];

  function myScore() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  var keepScore = myScore();

  function nextQuestion() {
    var num = Math.floor(Math.random() * questionsArr.length);

    questionsArr[num].displayQuestion();

    var ans = prompt("Please enter the correct ans");
    // here when we get and ans from prompt it will be of a string data type but we want it in int data type, so we use the javascript built in function parseInt() to convert the string into an integer value

    if (ans !== "exit") {
      questionsArr[num].checkAns(parseInt(ans), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
