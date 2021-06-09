let msTimer;
let ms = 1;

let mTimer;
let m = 1;
const startBtn = document.querySelector('.sw__start');
startBtn.addEventListener('click', () => {
    msTimer = setInterval(msInc, 10);
    mTimer = setInterval(mInc, 1000);
});

const stopBtn = document.querySelector('.sw__stop');
stopBtn.addEventListener('click', () => {
    clearInterval(msTimer);
});

const resetBtn = document.querySelector('.sw__reset');
resetBtn.addEventListener('click', () => {
    clearInterval(msTimer);
    let swVal = document.querySelector('.sw__time .msecs');
    swVal.innerHTML = 0;
    ms = 0;
});


function msInc() {
    let swTimeMs = document.querySelector('.sw__time .msecs');
    swTimeMs.innerHTML = ms;
    if (ms >= 0) {
        ms++;
    }
}

function mInc() {
    let swTimeM = document.querySelector('.sw__time .secs');
    swTimeM.innerHTML = m;
    if (m >= 0) {
        m++;
    }
}



/*
click startBtn -> promise -> resolve: if ms < 60 -> msTimer(msInc,10) -> then. ms 0
*/


