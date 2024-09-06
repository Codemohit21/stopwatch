let timerDisplay = document.querySelector('.timerdisplay');

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hr = 0;
let secs = 0;
let mins = 0;
let msec = 0;

let timerId = null;
startBtn.addEventListener('click', function () {

    // if (timerId !== null) {
    //     clearInterval(timerId);
    // }
    timerId = setInterval(starttime, 10);
})
stopBtn.addEventListener('click', function () {


    clearInterval(timerId);

})
resetBtn.addEventListener('click', function () {

    clearInterval(timerId);
    timerDisplay.innerHTML = `00:00:00:00`;
    hr = 0;
    secs = 0;
    mins = 0;
    msec = 0;
}
)




function starttime() {
    msec++;
    if (msec == 100) {
        secs++;
        msec = 0;
        if (secs == 60) {
            mins++;
            secs = 0;
            if (mins == 60) {
                hr++;
                mins = 0;
            }
        }
    }
    let ms=msec < 10 ? `0${msec}` : msec;
    let m = mins < 10 ? `0${mins}` : mins;
    let h = hr < 10 ? `0${hr}` : hr;
    let s = secs < 10 ? `0${secs}` : secs;
    console.log(h, m, s);
    timerDisplay.innerHTML = `${h}:${m}:${s}:${ms}`;
}