//let myGreeting = setTimeout(function sayHi() {
//  alert('Hello, Mr. Universe!');
//}, 2000);

// With a function defined separately
//function sayHi(namee) {
//  alert('Hello Mr. Universe!'+namee);
//}
//
//let myGreeting = setTimeout(sayHi, 2000,"papa");
//clearTimeout(myGreeting);
//
//function sayHi(namee) {
//  alert('Hello Mr. Universe!'+namee);
//}
//
//let myGreeting = setInterval(sayHi, 1000,"papa");


//let currTime = function() { 
//    let date = new Date();
//    let time = date.toLocaleTimeString();
//    console.log(time);
//}
//
//let clock = setInterval(currTime,1000);
//clearInterval(clock);
let msTimer;
let ms = 1;


//let fromZero = Date.now()-startTime;

const startBtn = document.querySelector('.sw__start');
startBtn.addEventListener('click', () => {
    msTimer = setInterval(msInc, 10);
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
    let swTime = document.querySelector('.sw__time .msecs');
    swTime.innerHTML = ms;
    if (ms >= 0) {
        ms++;
    }
}


//promise: if msInc = 60, 
//then s = 1 increase it, 
//if s=60 then min= 1, 
//if min = 60 then hours =60

// ES5: Part 1

var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// shorten it

// 2nd promise
var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);
};
// ES5: Part 2

// call our promise
var askMom = function () {
    console.log('before asking');
    willIGetNewPhone
    .then(showOff)
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
             // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom didn't buy it
            console.log(error.message);
             // output: 'mom is not happy'
        });
    console.log('after asking');
};

askMom();
























//let d = new Date();
//let paragraph = d.getMilliseconds().toString();
//console.log(paragraph)
//let regex = /(?<=[\d])\d{2}$/;
//const found = parseInt(paragraph.match(regex));
//console.log(found);

//const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
//const regex = /[A-Z]/g;
//
//
//console.log(found);

//digits last to number only

//const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
//const regex = /[A-Z]/g;
//const found = paragraph.match(regex);
//
//console.log(found);


//let testme = "Hajaj";
//let reg = /[A-Z]/g
//
//console.log(testme.match(reg));
