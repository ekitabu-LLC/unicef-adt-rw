var ans = ["C","A","B","B","C","B"];
var score=0;
var ids;
function checkAnsRadio(y,x){
	console.log(y, x);
	ids = document.getElementById(y).querySelectorAll('[id]');
	//console.log(ids);
	//var checkboxes = y.getElementsByTagName('input'),
    //i = checkboxes.length - 1;
	
	Array.prototype.forEach.call(ids, function( el, i ) {
		//console.log(el.tagName=='input', el.value==ans[x]);
		
		//highlight answers
		if(el.tagName=='input' && el.value==ans[x]){
			console.log(el.parentNode);
		    el.parentNode.style.background = "limegreen";

			if(el.checked){
				console.log('correct');
				document.getElementById('popup1').querySelector('.content').innerHTML = '<p>You got the answer correct</p>';
				window.location.href = '#popup1';
			}
		}else if(el.tagName=='input' && el.value!==ans[x]){
			el.parentNode.style.background = "red";
			if(el.checked){
				console.log('wrong');
				//showResponse('wrong');
				document.getElementById('popup1').querySelector('.content').innerHTML = '<p>You got the answer wrong</p>';
				window.location.href = '#popup1';
			}
			setTimeout(function() {
				document.getElementById('popup1').className.replace("show", "");
			}, 
			3000);
		}
	});
}


function showResponse(z) {			//show visual feedback
	var div = document.createElement('div');
	div.setAttribute('class', 'response');
	//var x = document.querySelector(".response");
	//x.className += " show";
	switch(z) {
		case 'correct':
			div.innerHTML = '<p>You got the answer correct</p>';
			break;

		case 'wrong':
			div.innerHTML = '<p>You got the answer wrong</p>';
			break;
	}
	document.body.appendChild(div);
	setTimeout(function() {
		div.className = div.className.replace("show", "");
	}, 
	3000);
}