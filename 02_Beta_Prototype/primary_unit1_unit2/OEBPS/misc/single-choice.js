
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
        var audio = new Audio('sound/correctAnswer.mp3');
        animateSequence(true);
        audio.play();
    }else{
        var audio = new Audio('sound/wrongAnswer.mp3');
        animateSequence(false);
        audio.play();
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

function animateSequence(correct) {
    if(correct)
        document.getElementById("msg-anim").innerHTML = '<h1 class="cssanimation sequence leFlyInBottom correct">CONGRATULATIONS</h1>';
    else
    document.getElementById("msg-anim").innerHTML = '<h1 class="cssanimation sequence leFlyInBottom tryagain">TRY AGAIN</h1>';
    var a = document.getElementsByClassName('sequence');
    
    a.innerText = "CONGRAGULATIONS";
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}

