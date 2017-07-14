console.log('You are in!')

let squid = document.querySelectorAll('.squid')[1];

let counter = 0
squidPosition = 80;

let randomSquid  = setInterval(function(){ getRandom() }, 2000);

function getRandom() {
        newRandom = Math.floor(Math.random() * 6);
        squid = document.querySelectorAll('.squid')[newRandom];
        console.log('random' + newRandom);
}

function upDown() {
    if(squidPosition === 80) {
        squidPosition = 0;
        squid.style.top = squidPosition + 'px';
    } else {
        squidPosition = 80;
        squid.style.top = squidPosition + 'px';
    }
    setTimeout(upDown, 1000);
}

upDown();







