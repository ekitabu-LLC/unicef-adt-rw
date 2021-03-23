var numOfQeustions = 0;

document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("btn-answer").addEventListener("click", evalAnswers);
    document.getElementById("btn-answer").disabled = true;
    document.getElementById("btn-reset").addEventListener("click", reset);

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
    //Attach number of draggable items
    var numOfQeustions = document.getElementsByClassName("drop-zone").length;
    var answeredQuestions = 0;
    var data = ev.dataTransfer.getData("imgId");
    if (ev.target.tagName == "p") {
        ev.target.parentElement.appendChild(document.getElementById(data));
    } else {
        ev.target.appendChild(document.getElementById(data));
    }

    var answers = document.getElementsByClassName("answer-drop");
    for (var i = 0; i < answers.length; i++) {
        var img = answers[i].nextElementSibling;
        if (img) {
            answeredQuestions += 1;
        }
    }
    if (answeredQuestions == numOfQeustions) {
        document.getElementById("btn-answer").disabled = false;
        document.getElementById("btn-answer").classList.add("active-btn");
    } else {
        document.getElementById("btn-answer").disabled = true;
        document.getElementById("btn-answer").classList.remove("active-btn");
    }
}

function dropBack(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("imgId");
    if (ev.target.tagName == "img" || ev.target.childElementCount > 0)
        return false;
    ev.target.appendChild(document.getElementById(data));
    document.getElementById("btn-answer").disabled = true;
    document.getElementById("btn-answer").classList.remove("active-btn");
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
                answers[i].previousElementSibling.setAttribute("src", "../Images/check.svg");
                answers[i].previousElementSibling.classList.add("answered");
            } else {
                answers[i].previousElementSibling.setAttribute("src", "../Images/close.svg");
                answers[i].previousElementSibling.classList.add("answered");
                allCorrect = false;
            }
        } else {
            answers[i].previousElementSibling.classList.remove("answered");
        }
    }

    if (answeredQuestions == numOfQeustions && allCorrect) {
        animateSequence(true);
    } else {
        animateSequence(false);
    }

}

function reset() {
    var orgImages = document.querySelectorAll(".dragable-image");
    for (const orgImage of orgImages) {
        document.getElementById(orgImage.getAttribute("origin")).appendChild(orgImage);
    }
    document.getElementById("btn-answer").disabled = true;
    document.getElementById("btn-answer").classList.remove("active-btn");
    var markImages = document.querySelectorAll(".mark-class");
    for (const markImage of markImages) {
        markImage.setAttribute("src", "");
        markImage.classList.remove("answered");
    }
}