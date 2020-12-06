$(document).ready(function () {
    prepareTellAStory();
});

function prepareTellAStory() {
    $(".draggable").on('dragstart', function (ev) {
        console.log(ev,"startDrag")
        ev.originalEvent.dataTransfer.setData("imgId",JSON.stringify({id:ev.target.id,parentId:ev.target.parentElement.id}) );
    });

    $(".drop-zone").on("dragover", function (ev) {
        ev.preventDefault();
    });

    $(".drop-zone").on("drop", function (ev) {
        ev.preventDefault();
        console.log(ev);
        var droppedImg = ev.originalEvent.dataTransfer.getData("imgId");
        var droppedIds = JSON.parse(droppedImg);
        if (ev.target.tagName == "img"){
            ev.originalEvent.target.parentElement.appendChild(document.getElementById(droppedIds.id));
            document.getElementById(droppedIds.parentId).appendChild(ev.target);
            
        }else{
            console.log(ev.originalEvent.target.firstChild)
            ev.originalEvent.target.appendChild(document.getElementById(droppedIds.id));
            document.getElementById(droppedIds.parentId).appendChild(ev.originalEvent.target.firstElementChild);
        }
        
    });

    $(".btn-answer").click(function(){
        var answeredTrue = true;
        $(".image-container").each(function(){
            $(this).removeClass("correct-tell-story");
            $(this).removeClass("wrong-tell-story");
            if($(this).children()[0].id == $(this).attr("answer")){
                $(this).addClass("correct-tell-story");
            }else{
                $(this).addClass("wrong-tell-story");
                answeredTrue = false;
            }
            
        });
        animateSequence(answeredTrue);
    });

    $(".btn-reset").click(function(){
        $(".image-container").each(function(){
            $(this).removeClass("correct-tell-story");
            $(this).removeClass("wrong-tell-story");
            $(this).append( $("#"+$(this).attr("original")));
        });
    });
}

