
var myPlayer = videojs.getPlayer('#my-video');
    myPlayer.on('loadedmetadata', function() {
    myPlayer.play();
});

function videoEnded() {
    
    $(".video_wrapper").hide(); 
        
      
}

