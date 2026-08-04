let play = document.getElementById('play');
let progresber = document.getElementById('progresber');
let audio = new Audio("audio/1.mp3");
let currentsong = 1;

play.addEventListener("click", () => {
    if (audio.paused || audio.currentTime == 0) {
        audio.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    } else {
        audio.pause();
        play.classList.add('fa-play');
        play.classList.remove('fa-pause');
    }
});

progresber.addEventListener('input', function(){
    let value = this.value;
    this.style.background = `linear-gradient(to right, #177200f ${value}%, #333 ${value}%)`;
    audio.currentTime = (progresber.value * audio.duration)/100;
})

audio.addEventListener("timeupdate", ()=>{
    let progress = (audio.currentTime/audio.duration)*100;
    progresber.value = progress;
});

let playmusic = Array.from(document.getElementsByClassName('playmusic'));

const makeallplay = () =>{
    playmusic.forEach((element) =>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
};

playmusic.forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeallplay();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');

        let indexe = parseInt(e.target.id);
        audio.src = `Audio/${indexe}.mp3`;
        audio.currentTime = 0;
        audio.play();
    });
});

playnextsong = () =>{
    let nextsong = (currentsong + 1) %playmusic.length;
    currentsong = nextsong == 0 ? 14 : nextsong;
        audio.src = `audio/${currentsong}.mp3`;
        audio.currentTime = 0;
        audio.play();
}

playprevsong = () =>{
    let prevsong = (currentsong - 1) ;
    currentsong = prevsong == 0 ? 14 : prevsong;
        audio.src = `audio/${currentsong}.mp3`;
        audio.currentTime = 0;
        audio.play();
}

let forward = document.getElementById('forward');
let backward = document.getElementById('backward');