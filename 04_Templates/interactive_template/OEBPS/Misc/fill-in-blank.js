$(document).ready(function () {
    prepareFillWords(false);
});


function prepareFillWords(evalOnChange = true) {
    if (evalOnChange) {
        $(".fill-blank").change(function (event) {
            evalAnswer(this);
        });
    } else {
        
        $(".btn-answer").click(function (event) {
            var answeredTrue = true;
            $(".fill-blank").each(function () {
                if(!evalAnswer(this)){
                    answeredTrue = false;
                };
            });
            animateSequence(answeredTrue);
        });
        
    }


    $(".btn-reset").click(function (event) {
        $(".fill-blank").each(function () {
            $(this).val("");
            $(this).removeClass("wrong-fill-blank");
            $(this).removeClass("correct-fill-blank");
        });
    });

}

function evalAnswer(element) {
    $(element).removeClass("wrong-fill-blank");
    $(element).removeClass("correct-fill-blank");
    if ($(element).val().trim().length == 0) {
        $(element).removeClass("wrong-fill-blank");
        $(element).removeClass("correct-fill-blank");
        return false;
    }
    if ($(element).attr("answer").toLowerCase() == $(element).val().toLowerCase()) {
        $(element).addClass("correct-fill-blank");
        return true;
    } else {
        $(element).addClass("wrong-fill-blank");
        return false;
    }

}
