document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById("submit-btn").addEventListener("click", evalAnswers);

  //Attach needed events for drag and drop
  const backDropZones = document.querySelectorAll(".drop-zone")
  for (const backDropZone of backDropZones) {
    backDropZone.addEventListener('drop', dropBack);
    backDropZone.addEventListener('dragover', allowDrop);
    backDropZone.querySelectorAll("img")[0].addEventListener("dragstart",drag);
    
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
    var data = ev.dataTransfer.getData("imgId");
    ev.target.parentElement.appendChild(document.getElementById(data));
  }

  function dropBack(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("imgId");
    if(ev.target.tagName == "img")
      return false;
    ev.target.appendChild(document.getElementById(data));
  }

  function evalAnswers(){
    var numOfQeustions = 6;
    var answeredQuestions = 0;
    var allCorrect = true;
    var answers = document.getElementsByClassName("answer-drop");
    for(var i=0;i<answers.length;i++){
      var img = answers[i].nextElementSibling;
      if(img){
        answeredQuestions+=1;
        if(img.getAttribute("answer") == answers[i].getAttribute("answer")){
          answers[i].previousElementSibling.setAttribute("src","image/check.svg");
          answers[i].previousElementSibling.classList.add("answered");
        }else{
          answers[i].previousElementSibling.setAttribute("src","image/close.svg");
          answers[i].previousElementSibling.classList.add("answered");
          allCorrect = false;
        }
      }else{
        answers[i].previousElementSibling.classList.remove("answered");
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