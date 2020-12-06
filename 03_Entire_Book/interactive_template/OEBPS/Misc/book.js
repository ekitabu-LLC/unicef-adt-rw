$(document).ready(function () {
    prepareVideoElements();

});



function prepareVideoElements() {
    var videoContainer = $("#video-player");
    var videoSrc = $("#video-player video source");
    var videoElement = $("#video-player video");

    $(".show-video").click(function () {
        videoSrc.attr("src", $(this).attr("video"))
        videoElement.attr("poster", $(this).attr("poster"))
        videoContainer.show();
    })

    $("#videoclose").click(function (event) {
        event.stopPropagation();
        videoContainer.hide();

    });

    videoContainer.click(function () {
        videoContainer.hide();
    });

    videoElement.click(function (event) {
        event.stopPropagation();
    });

}

function animateSequence(correct) {
    if (correct)
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
    setTimeout(function () { $("#msg-anim").empty(); }, 4000);
}

function playSound(correct = true) {
    var audio = new Audio('sound/correctAnswer.mp3');
    audio.play();
}