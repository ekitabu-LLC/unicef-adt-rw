var numOfQeustions = 6;

document.addEventListener("DOMContentLoaded", function (event) {

  document.getElementById("submit-btn").addEventListener("click", evalAnswers);
  document.getElementById("submit-btn").disabled = true;
  document.getElementById("reset-btn").addEventListener("click", reset);

  //Attach needed events for drag and drop
  const backDropZones = document.querySelectorAll(".drop-zone")
  for (const backDropZone of backDropZones) {
    backDropZone.addEventListener('drop', dropBack);
    backDropZone.addEventListener('dragover', allowDrop);
    backDropZone.querySelectorAll("img")[0].addEventListener("dragstart", drag);

  }
  //attach needed events for drop zones
  const dropZones = document.querySelectorAll(".target-drop")
  for (const dropZone of dropZones) {
    dropZone.addEventListener('drop', drop);
    dropZone.addEventListener('dragover', allowDrop);
  }

});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("imgId", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var answeredQuestions = 0;
  var data = ev.dataTransfer.getData("imgId");
  ev.target.parentElement.appendChild(document.getElementById(data));
  var answers = document.getElementsByClassName("answer-drop");
  for (var i = 0; i < answers.length; i++) {
    var img = answers[i].nextElementSibling;
    if (img) {
      answeredQuestions += 1;
    }
  }
  if (answeredQuestions == numOfQeustions) {
    document.getElementById("submit-btn").disabled = false;
    document.getElementById("submit-btn").classList.add("active-btn");
  } else {
    document.getElementById("submit-btn").disabled = true;
    document.getElementById("submit-btn").classList.remove("active-btn");
  }
}

function dropBack(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("imgId");
  if (ev.target.tagName == "img")
    return false;
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("submit-btn").disabled = true;
  document.getElementById("submit-btn").classList.remove("active-btn");
}

function evalAnswers() {

  var answeredQuestions = 0;
  var allCorrect = true;
  var answers = document.getElementsByClassName("answer-drop");
  for (var i = 0; i < answers.length; i++) {
    var img = answers[i].nextElementSibling;
    if (img) {
      answeredQuestions += 1;
      if (img.getAttribute("answer") == answers[i].getAttribute("answer")) {
        answers[i].previousElementSibling.setAttribute("src", "image/check.svg");
        answers[i].previousElementSibling.classList.add("answered");
      } else {
        answers[i].previousElementSibling.setAttribute("src", "image/close.svg");
        answers[i].previousElementSibling.classList.add("answered");
        allCorrect = false;
      }
    } else {
      answers[i].previousElementSibling.classList.remove("answered");
    }
  }

  if (answeredQuestions == numOfQeustions && allCorrect) {
    var audio = new Audio('sound/correctAnswer.mp3');
    animateSequence(true);
    audio.play();
  } else {
    var audio = new Audio('sound/wrongAnswer.mp3');
    animateSequence(false);
    audio.play();
  }

}

function reset() {
  document.getElementById("msg-anim").innerHTML = "";
  var orgImages = document.querySelectorAll(".dragable-image");
  for (const orgImage of orgImages) {
    document.getElementById(orgImage.getAttribute("origin")).appendChild(orgImage);
  }
  document.getElementById("submit-btn").disabled = true;
  document.getElementById("submit-btn").classList.remove("active-btn");
  var markImages = document.querySelectorAll(".mark-class");
  for (const markImage of markImages) {
    markImage.setAttribute("src", "");
    markImage.classList.remove("answered");
  }
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