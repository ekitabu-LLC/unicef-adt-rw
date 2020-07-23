<html>
<head>
<title>English Pupil's Book 3</title>
<!--link href="../Styles/stylesheet.css" rel="stylesheet" type="text/css"/-->
<script type="text/javascript">
//<![CDATA[
var answers=[["Kobe","Skip rope and spell words","Raise the flag","Kobe\’s Mother","He prepared to go to school"],["dream","walk","play","have","like"]]
console.log(answers[0][1])
function checkAnswers(divId,t){
	var ids = Array.prototype.slice.call(document.querySelectorAll('.questions')).map(function ( element ) {
    return element.id;
	});
	var x=ids.indexOf(divId);
	var inputs = document.getElementById(divId).getElementsByTagName(t);
	console.log(inputs.length);
	var correctAnswers = 0;
	for (i = 0; i < inputs.length; i++) {
		var curAns = document.getElementById(divId).getElementsByTagName(t)[i].value;
		var ans = answers[x][i];
		console.log(curAns);
		if(curAns == ans){
			correctAnswers++;
			document.getElementById(divId).getElementsByTagName(t)[i].style.background = "LightGreen";
			document.getElementById(divId).getElementsByTagName(t)[i].style.color = "Black";
		}else{
				document.getElementById(divId).getElementsByTagName(t)[i].style.background = "Crimson";
				document.getElementById(divId).getElementsByTagName(t)[i].style.color = "White";
				document.getElementById(divId).getElementsByTagName("span")[i].textContent = ` ${answers[x][i]} `;
				document.getElementById(divId).getElementsByTagName("span")[i].style.color = "Green";
			}
		document.getElementById(divId).getElementsByTagName("span")[i+1].textContent = "Score " + correctAnswers + "/" + inputs.length + ".";
		document.getElementById(divId).getElementsByTagName("span")[i+1].style. = "Score " + correctAnswers + "/" + inputs.length + ".";
	} 
	correctAnswers = 0;
}
//]]>
</script>
<style type="text/css">
form { margin:auto; width:11em}
fieldset {padding:1ex}
label {display:block; margin:0; text-align:left}
label.highlight {background-color:#aaa}
label.highlight input {background-color:#a00}
button {display:block; margin:auto}
</style>
</head>
<body>
<div class="row">
 <div class="column" id="lesson">
   <h2>Lesson</h2>
 </div>
 <div class="column" id="lesson-number">
   <h2>1 and 2</h2>
 </div>
 <div class="column" id="lesson-title">
   <h2>Activities at home and at school</h2>
 </div>
</div>
<h3 style="color:blue">Vocabulary: br, bl</h3>
<div>
	<h3 style="color: maroon">Read the Words</h3>
	<ul style="display: inline">
			<li>block</li>
			<li>bring</li>
			<li>able</li>
		</ul>
	
</div>

	<h2>Word study</h2>
	<div style="">
		<h3 style="color: maroon">Read the Words</h3>
		<ul style="display: inline">
			<li>spell</li>
			<li>flag</li>
			<li>small</li>
			<li>speak</li>
			<li>black</li>
		</ul>

		<h3 style="color: maroon">Extra Practice</h3>
		<ul style="display: inline">
			<li>scout</li>
			<li>play</li>
		</ul>
	</div>
	

	

<h3 style="color:blue">Comprehension</h3>
<h4 style="color:red">Write the answers to the following questions from the story you have read</h4>
<div name="p2qb1" id="p2qb1" class="questions">
	<p>1. Who will go to a new school? <input id="1" type="text"/><span id="ans1"></span></p>
	<p>2. What games can Kobe play? <input id="2" type="text"/><span id="ans2"></span></p>
	<p>3. What do boy scouts and girl guides do at the assembly? <input id="3" type="text"/><span id="ans3"></span></p>
	<p>4. Who woke up Kobe? <input id="4" type="text"/><span id="ans4"></span></p>
	<p>5. What do you think Kobe did when he woke up? <input id="5" type="text"/><span id="ans5"></span></p>
	<button onclick="checkAnswers('p2qb1','input')" style="float: left">submit</button>
	<span id="score1"></span>
	</br>
</div>



<h3 style="color:blue">Grammar: Doing words</h3>
<h4 style="color:red">Choose one of the words in brackets to complete the sentences. Write each sentence in your book.</h4>
<div id="p2qb2" class="questions">
	<p>1. He <select id="p2qb2s1"><option hidden disabled selected value></option><option value="dream">dream</option><option value="dreams">dreams</option></select><span id="ans1"></span> of the new school.</p>
	<p>2. I <select id="p2qb2s2"><option hidden disabled selected value></option><option value="walks">walks</option><option value="walk">walk</option></select><span id="ans2"></span>  to school.</p>
	<p>3. We <select id="p2qb2s3"><option hidden disabled selected value></option><option value="play">play</option><option value="plays">plays</option></select><span id="ans3"></span> at break time.</p>
	<p>4. The scouts <select id="p2qb2s4"><option hidden disabled selected value></option><option value="has">has</option><option value="have">have</option></select><span id="ans4"></span> a flag.</p>
	<p>5. Jane and Musa <select id="p2qb2s5"><option hidden disabled selected value></option><option value="like">like</option><option value="likes">likes</option></select><span id="ans5"></span> to run and swim.</p>
	<button onclick="checkAnswers('p2qb2','select')" style="float: left">submit</button>
	
	<span id="score2"></span>

</div>

</body>
</html>