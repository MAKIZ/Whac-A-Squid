console.log('You are in!')

let squids = document.querySelectorAll('section')[Math.floor(Math.random() * 6)];
let timer = document.getElementById('timer');
squidPosition = 160;
let score = 0;
let secs = 60;

//start game when click button
function start() {
    squidUpDown();
    countdown();
}

function refresh() {
    location.reload()
}

//set random corals
function getRandom() {
    newRandom = Math.floor(Math.random() * 6);
    squids = document.querySelectorAll('section')[newRandom];
    // console.log('random ' + newRandom);
}

//squid up and down

function squidUpDown() {
    if(squidPosition === 160) {
        squidPosition = 0;
        squids.style.top = squidPosition + 'px';
        // console.log('Up')
    } else {
        squidPosition = 160;
        squids.style.top = squidPosition + 'px';
        // console.log('Down')
    }
}

//score counter
function hit() {
    // console.log('Hit');
    score++;
    document.getElementById('score').innerHTML = score;
}

//counter 
function countdown() {
    let randomSquidOff  = setInterval(function(){ getRandom() }, 2000);
    let squidOff  = setInterval(function(){ squidUpDown() }, 1000);
    document.querySelector('button').disabled = false
    
    function timerStart() {
        if (secs === 0) {
            clearInterval(timerStart);
            timer.innerHTML = secs;
            clearInterval(squidOff);
            clearInterval(randomSquidOff);
            // document.querySelector('button').disabled = false;
            document.querySelector('#timesup').innerHTML = `Time's Up! You got this score ${score}`;
            reset.innerHTML = `<a href="index.html">Play again </a>`
        } else {
            secs--;
            timer.innerHTML = secs;
            // console.log(secs);
        } 
        
        if (secs === 10) {
            document.querySelector('#timer').style.color = 'tomato';
        }
    }
    setInterval(timerStart, 1000)
}

window.onload = function(){
    document.getElementById("squid1").addEventListener("click",hit);
    document.getElementById("squid2").addEventListener("click",hit); 
    document.getElementById("squid3").addEventListener("click",hit); 
    document.getElementById("squid4").addEventListener("click",hit); 
    document.getElementById("squid5").addEventListener("click",hit); 
    document.getElementById("squid6").addEventListener("click",hit);
}   