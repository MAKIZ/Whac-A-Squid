console.log('You are in!')

let coral = document.querySelector('.coral');
let squid = document.querySelectorAll('.squid');

let counter = 0
squidPosition = 80;

function getRandom() {
    newRandom = Math.floor(Math.random() * squid.length);
    squid = document.querySelectorAll('.squid')[newRandom];
    console.log('random');
    return squid;
}

getRandom();

function upDown() {
    if(squidPosition == 80) {
        squidPosition = 0;
        squid.style.top = squidPosition + 'px';
    } else {
        squidPosition = 80;
        squid.style.top = squidPosition + 'px';
    }
    setTimeout(upDown, 1000);
}

upDown();







