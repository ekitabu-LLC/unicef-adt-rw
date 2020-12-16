$(document).ready(function () {
    prepareTrueFalse();
});

function prepareTrueFalse(){
    $(".answer-section-click").click(function (){
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");
        $(this).parent().attr("selected-answer",$(this).attr("value"));
        $(this).parent().removeClass("answered");
    });

    $(".btn-answer").click(function(){
        var answeredTrue = true;
        $(".true-false-answer").each(function(){
            $(this).addClass("answered");
            if($(this).attr("answer") == $(this).attr("selected-answer")){
                $($(this).find(".true-false-eval")[0]).children()[0].src ="../Images/check.svg";
            }else{

                $($(this).find(".true-false-eval")[0]).children()[0].src ="../Images/close.svg";
                answeredTrue = false;
            }
            
        });
        animateSequence(answeredTrue);
    });

    $(".btn-reset").click(function(){
        $(".answer-section-click").each(function(){
            $(this).parent().find(".active").removeClass("active");
            $(this).parent().attr("selected-answer","");
            $(this).parent().removeClass("answered");
        });
    });
}