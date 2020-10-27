
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("submit-btn").addEventListener("click", evalAnswers);
});


function evalAnswers(){
    var allCorrect = true;
    var answers = document.getElementsByClassName("single-choice");
    var numOfQeustions = 6;
    var answeredQuestions = 0;
    for(var i=0;i<answers.length;i++){
        if(answers[i].checked && answers[i].getAttribute("answer")=="true"){
            answers[i].nextElementSibling.classList.add("eval-answer-true");
            answeredQuestions += 1;
        }
        else if(answers[i].checked){
            answers[i].nextElementSibling.classList.add("eval-answer-false");
            answeredQuestions += 1;
            allCorrect = false;
        }else{
            answers[i].nextElementSibling.classList.remove("eval-answer-false");
            answers[i].nextElementSibling.classList.remove("eval-answer-true");
        }
        
    }

    if(answeredQuestions == numOfQeustions && allCorrect){
        var audio = new Audio('sound/correctAnswer.mp3');
        audio.play();
    }else{
        var audio = new Audio('sound/wrongAnswer.mp3');
        audio.play();
    }
}

