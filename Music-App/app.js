let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrIcon = document.getElementById("ctricon");

// Set slider max value when song metadata loads
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

// Play / Pause Function
function playPause() {
    if (song.paused) {
        song.play();
        ctrIcon.classList.remove("fa-play");
        ctrIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrIcon.classList.remove("fa-pause");
        ctrIcon.classList.add("fa-play");
    }
}

// Update progress bar while song is playing
song.ontimeupdate = function () {
    progress.value = song.currentTime;
};

// Seek functionality
progress.oninput = function () {
    song.currentTime = progress.value;
};

// Optional: Continue playing after seeking
progress.onchange = function () {
    if (song.paused) {
        song.play();
        ctrIcon.classList.remove("fa-play");
        ctrIcon.classList.add("fa-pause");
    }
};