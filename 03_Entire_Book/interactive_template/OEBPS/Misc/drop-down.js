$(document).ready(function() {
    $('select').niceSelect();

    $(".btn-answer").click(function(ev){
        var answeredTrue = true;
        $(".drop-down-answer").each(function(){
            $(this).addClass("answered");
            if(($(this).find("select")).val().toLowerCase() == $(this).attr("answer").toLowerCase()){
                $($(this).find(".drop-down-eval")[0]).children()[0].src ="../Images/check.svg";
            }else{
                $($(this).find(".drop-down-eval")[0]).children()[0].src ="../Images/close.svg";
                answeredTrue = false;
            }
        });
        animateSequence(answeredTrue);
    });
  });