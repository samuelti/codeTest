var questions = ["what is a self closing tag?", "What is the DOM?", "What is "];
var answer1 = ["a tag with a tappered end.", "a hit game from 1996.", "h"];
var answer2 = ["a tag that neatly ties up the 3rd act of a plot.", "it stands for document object model.", "a"];
var answer3 = ["a tag that doesn't need a second tag to close it, like the img or br tag.", "the computer's instatiable desire to dominate the world.", "j"];
var correct = [ 3, 2, 1];
var currentQuestion = 0;
var totalQuestions = 3;
var currentScore = 0;
var currentTime = 60;
var timePenalty = 15;
var rightWrong = ["Right!", "Wrong!"];
var timerEl = document.getElementById("timer");


document.getElementById("enterName").style.display="none";

function countdown() {
    
    var timeInterval = setInterval(function () {
        
        if (currentTime > 1) {
          timerEl.textContent = currentTime + ' seconds remaining';
          currentTime--;
        } 
        else if (currentTime === 1) {
          timerEl.textContent = currentTime + ' second remaining';
          currentTime--;
        } 
        else {
          timerEl.textContent = '';
          clearInterval(timeInterval);
          showScore();
        }
      }, 1000);

}

document.getElementById("quiz").style.display="none";

function replace() { 
    document.getElementById("startButton").style.display="none"; 
    document.getElementById("quiz").style.display="block";
}

function rightWrongErase() {
    document.getElementById("rightWrong").innerHTML = "";
}



function evaluateAnswer(answerNumber) {
    if (correct[currentQuestion] === answerNumber ) {
        currentScore += 1;  
        document.getElementById("rightWrong").innerHTML = rightWrong[0];
        
    }
    
    else {
        currentTime -= timePenalty;
        document.getElementById("rightWrong").innerHTML = rightWrong[1];
    }
    console.log(currentScore);
    console.log(currentTime);
    currentQuestion += 1;
    if (currentQuestion >= totalQuestions) {
        showScore();
        currentTime = 0;
    }

    questionReplace();
    setTimeout(rightWrongErase, 1000);
    
}


function questionReplace() {
    document.getElementById("questions").innerHTML = questions[currentQuestion];
    document.getElementById("answer1").innerHTML = answer1[currentQuestion];
    document.getElementById("answer2").innerHTML = answer2[currentQuestion];
    document.getElementById("answer3").innerHTML = answer3[currentQuestion];
}

function startQuiz() {
    replace();
    questionReplace();
    countdown();
}

function submit() {
    var userName = document.getElementById("input").value;
    var highscore = userName + " " + currentScore;
    console.log(highscore);
    localStorage.setItem("userName", userName);
    localStorage.setItem("score", currentScore);
    document.getElementById("confirm").innerHTML = "Your score has been saved! thank you."
}

function showScore() {
    document.getElementById("quiz").style.display="none";
    document.getElementById("enterName").style.display="block";
    document.getElementById("scores").innerHTML = currentScore;

}

function clearScore() {
    localStorage.removeItem(highscore);
}