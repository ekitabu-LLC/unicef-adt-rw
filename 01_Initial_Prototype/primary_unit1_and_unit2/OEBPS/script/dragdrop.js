// Function to get elements by class name for DOM fragment and tag name
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var image = ev.dataTransfer.getData("text");
  if (ev.target.id == document.getElementById(image).getAttribute('data-div')){ 
     alert("ok");
  ev.target.appendChild(document.getElementById(image));
  document.getElementById('popup1').querySelector('.content').innerHTML = '<p>You got the answer correct</p>';
  window.location.href = '#popup1';
}
    
  else{
     alert("wrong");
	 document.getElementById('popup1').querySelector('.content').innerHTML = '<p>You got the answer wrong</p>';
	 window.location.href = '#popup1';
  }
}


