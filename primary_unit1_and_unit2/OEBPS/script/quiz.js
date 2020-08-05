 //    The function evaluates the answer and displays result
  function displayAnswer1() {
    if (document.getElementById('option-11').checked) {
      document.getElementById('block-11').style.border = '0 none'
      document.getElementById('result-11').style.color = 'red'
      document.getElementById('result-11').innerHTML = 'Incorrect!'
    }
    if (document.getElementById('option-12').checked) {
      document.getElementById('block-12').style.border = '0 none'
      document.getElementById('result-12').style.color = 'limegreen'
      document.getElementById('result-12').innerHTML = 'Correct!'
      showCorrectAnswer1()
    }
    if (document.getElementById('option-13').checked) {
      document.getElementById('block-13').style.border = '0 none '
      document.getElementById('result-13').style.color = 'red'
      document.getElementById('result-13').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
    
}
      function displayAnswer2() {
 if (document.getElementById('option-14').checked) {
      document.getElementById('block-14').style.border = '0 none'
      document.getElementById('result-14').style.color = 'red'
      document.getElementById('result-14').innerHTML = 'Incorrect!'
    }
    if (document.getElementById('option-15').checked) {
      document.getElementById('block-15').style.border = '0 none'
      document.getElementById('result-15').style.color = 'red'
      document.getElementById('result-15').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
    if (document.getElementById('option-16').checked) {
      document.getElementById('block-16').style.border = '0 none'
      document.getElementById('result-16').style.color = 'limegreen'
      document.getElementById('result-16').innerHTML = 'Correct!'
      showCorrectAnswer2()
    }
    
  }
function displayAnswer3() {
 if (document.getElementById('option-17').checked) {
      document.getElementById('block-17').style.border = '0 none'
      document.getElementById('result-17').style.color = 'red'
      document.getElementById('result-17').innerHTML = 'Incorrect!'
    }
    if (document.getElementById('option-18').checked) {
      document.getElementById('block-18').style.border = '0 none'
      document.getElementById('result-18').style.color = 'limegreen'
      document.getElementById('result-18').innerHTML = 'Correct!'
      showCorrectAnswer3()
    }
    if (document.getElementById('option-19').checked) {
      document.getElementById('block-19').style.border = '0 none'
      document.getElementById('result-19').style.color = 'red'
      document.getElementById('result-19').innerHTML = 'Incorrect!'
      showCorrectAnswer3()
    }
    
  }
  function showCorrectAnswer1() {
    let showAnswer1 = document.createElement('p')
    showAnswer1.innerHTML = 'Show Correct Answer'
    showAnswer1.style.position = 'relative'
    showAnswer1.style.top = '-180px'
    showAnswer1.style.fontSize = '1.75rem'
    document.getElementById('showAnswer1').appendChild(showAnswer1)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-12').style.border = '0 none'
      document.getElementById('result-12').style.color = 'limegreen'
      document.getElementById('result-12').innerHTML = 'Correct!'
      document.getElementById('showAnswer1').removeChild(showAnswer1)
    })
  }
function showCorrectAnswer2() {
    let showAnswer2 = document.createElement('p')
    showAnswer2.innerHTML = 'Show Correct Answer'
    showAnswer2.style.position = 'relative'
    showAnswer2.style.top = '-180px'
    showAnswer2.style.fontSize = '1.75rem'
    document.getElementById('showanswer2').appendChild(showAnswer2)
    showAnswer2.addEventListener('click', () => {
      document.getElementById('block-16').style.border = '0 none'
      document.getElementById('result-16').style.color = 'limegreen'
      document.getElementById('result-16').innerHTML = 'Correct!'
      document.getElementById('showanswer2').removeChild(showAnswer2)
    })
  }
function showCorrectAnswer3() {
    let showAnswer3 = document.createElement('p')
    showAnswer3.innerHTML = 'Show Correct Answer'
    showAnswer3.style.position = 'relative'
    showAnswer3.style.top = '-180px'
    showAnswer3.style.fontSize = '1.75rem'
    document.getElementById('showanswer3').appendChild(showAnswer3)
    showAnswer3.addEventListener('click', () => {
      document.getElementById('block-18').style.border = '0 none'
      document.getElementById('result-18').style.color = 'limegreen'
      document.getElementById('result-18').innerHTML = 'Correct!'
      document.getElementById('showanswer3').removeChild(showAnswer3)
    })
  }
