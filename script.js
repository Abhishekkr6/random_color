let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let body = document.querySelector('body');

let randomColor = function () {
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let interval;

let changeColor = function () {
    body.style.backgroundColor = randomColor();
};

let startchangeBgColor = function () {
    if (!interval) {
        interval = setInterval(changeColor, 1000);
    }
};

let stopchangeBgColor = function () {
    clearInterval(interval);
    interval = null;
};

start.addEventListener("click", startchangeBgColor);
stop.addEventListener("click", stopchangeBgColor);


// start.addEventListener('click', console.log(randomColor()));