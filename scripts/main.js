console.log('You are in!')

let coral = document.querySelector('.coral');
let squid = document.querySelector('.squid');

squidLocation = 80;

function upDown() {
    // let transition = window.requestAnimationFrame(upDown);
    
    if(squidLocation == 80) {
        squidLocation = 0;
        squid.style.top = squidLocation + 'px';
    } else {
        squidLocation = 80;
        squid.style.top = squidLocation + 'px';
    }
    setTimeout(upDown, 1000);
}

upDown();
