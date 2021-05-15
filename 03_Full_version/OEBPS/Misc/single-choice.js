
var numOfQeustions = 6;

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("submit-btn").addEventListener("click", evalAnswers);
    document.getElementById("submit-btn").disabled = true;
    document.getElementById("reset-btn").addEventListener("click", reset);
    


    const singleChoices = document.querySelectorAll(".single-choice")
  for (const singleChoice of singleChoices) {
    singleChoice.addEventListener('click', function(){
        if(document.querySelectorAll(".single-choice:checked").length == numOfQeustions){
            document.getElementById("submit-btn").disabled = false;
            document.getElementById("submit-btn").classList.add("active-btn");
        }else{
            document.getElementById("submit-btn").disabled = true; 
            document.getElementById("submit-btn").classList.remove("active-btn");
        }
    });
  }
});


function evalAnswers(){
    var allCorrect = true;
    var answers = document.getElementsByClassName("single-choice");
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

        animateSequence(true);

    }else{

        animateSequence(false);

    }
}

function reset(){
    document.getElementById("msg-anim").innerHTML = "";
    var answers = document.querySelectorAll(".single-choice:checked");
    for (const answer of answers) {
        answer.checked = false;
        answer.nextElementSibling.classList.remove("eval-answer-false");
        answer.nextElementSibling.classList.remove("eval-answer-true");
    }
    document.getElementById("submit-btn").disabled = true;
    document.getElementById("submit-btn").classList.remove("active-btn");
}
