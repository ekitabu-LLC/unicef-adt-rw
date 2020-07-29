var ans = ["C","A","B","B","C","B"];
var score=0;
var ids;
function checkAnsRadio(y,x){
	console.log(y, x);
	ids = document.getElementById(y).querySelectorAll('[id]');
	//console.log(ids);
	Array.prototype.forEach.call(ids, function( el, i ) {
		// "el" is your element
		//console.log(el.tagName=='input', el.value==ans[x]);
		
		if(el.tagName=='input' && el.value==ans[x] && el.checked){
			console.log(el.parentNode);
		    el.parentNode.style.background = "limegreen";
		    
		}else if(el.tagName=='input' && el.value!==ans[x]){
			el.parentNode.style.background = "red";
		}
	});
}