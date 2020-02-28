

function videoAutoplay() {
    var myPlayer = videojs.getPlayer('#my-video');
    console.log("video detected");
    myPlayer.play();
}

function videoEnded() {
    $(".video_wrapper").hide();  
}

