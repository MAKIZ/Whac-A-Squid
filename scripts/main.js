console.log('You are in!')

let squids = document.querySelectorAll('section')[Math.floor(Math.random() * 6)];
squidPosition = 180;
let score = 0;

let randomSquid  = setInterval(function(){ getRandom() }, 2000);

function getRandom() {
    newRandom = Math.floor(Math.random() * 6);
    squids = document.querySelectorAll('section')[newRandom];
    console.log('random' + newRandom);
}

function squidUpDown() {
    if(squidPosition === 180) {
        squidPosition = 0;
        squids.style.top = squidPosition + 'px';
    } else {
        squidPosition = 180;
        squids.style.top = squidPosition + 'px';
    }
    setTimeout(squidUpDown, 1000);
}

squidUpDown();

function hit() {
    console.log('Hit');
    score++;
    document.getElementById('score').innerHTML = score;
}

window.onload = function(){
    document.getElementById("squid1").addEventListener("click",hit);
    document.getElementById("squid2").addEventListener("click",hit); 
    document.getElementById("squid3").addEventListener("click",hit); 
    document.getElementById("squid4").addEventListener("click",hit); 
    document.getElementById("squid5").addEventListener("click",hit); 
    document.getElementById("squid6").addEventListener("click",hit);
}

//counter 
function countdown() {
    let timer = document.getElementById('timer');
    let secs = 60;

    function timerStart() {
        if (secs === 0) {
            clearInterval(timerStart);
            timer.innerHTML = secs;
        } else {
            secs--;
            timer.innerHTML = secs;
        }  
            
    }
    setInterval(timerStart, 1000)
}

countdown();