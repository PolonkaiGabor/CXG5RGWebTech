var myVideo;
var originalWidth;

document.addEventListener('DOMContentLoaded', function() {
    myVideo = document.getElementById("video");
    originalWidth = myVideo.offsetWidth;
});

function playVideo() {
    myVideo.play();
}

function pauseVideo() {
    myVideo.pause();
}

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function changeVolume(volume) {
    switch (volume) {
        case 'silent':
            myVideo.volume = 0;
            break;
        case 'quiet':
            myVideo.volume = 0.25;
            break;
        case 'loud':
            myVideo.volume = 1;
            break;
    }
}

function changeSpeed(speed) {
    switch (speed) {
        case 'very_slow':
            myVideo.playbackRate = 0.25;
            break
        case 'slow':
            myVideo.playbackRate = 0.5;
            break;
        case 'normal':
            myVideo.playbackRate = 1;
            break;
        case 'fast':
            myVideo.playbackRate = 1.5;
            break;
        case 'very_fast':
            myVideo.playbackRate = 2;
            break;
    }
}

function checkIfEnded() {
    if (myVideo.ended)
        alert("Vége a videónak");
    else
        alert("Megy a videó");
}



function showVideoLength() {
    alert("Video hossza: " + myVideo.duration + " másodperc");
}

function showCurrentTime() {
    alert("Jelenlegi pozició: " + myVideo.currentTime + " másodperc");
}

function zoomIn() {
    resetSize();
    myVideo.style.width = (myVideo.offsetWidth * 1.5) + "px";
}

function zoomOut() {
    resetSize();
    myVideo.style.width = (myVideo.offsetWidth * 0.5) + "px";
}

function resetSize() {
    myVideo.style.width = originalWidth + "px";
}
