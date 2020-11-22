$(document).ready(function(){
    var videoContainer = $("#video-player");
    var videoSrc = $("#video-player video source");
    var videoElement =$("#video-player video");
    $(".show-video").click(function(){
        videoSrc.attr("src",$(this).attr("video"))
        videoElement.attr("poster",$(this).attr("poster"))
        videoContainer.show();
    })

    videoContainer.click(function(){
        videoContainer.hide();
    });

    videoElement.click(function(event){
        event.stopPropagation();
    });

});