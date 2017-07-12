console.log('You are in!')

var squid =  document.getElementById('squid');
var showHide = 'none';

function inOut() {
    //toggle the position visible and hidden
    if (showHide == 'none' ) {
        showHide = 'block';
    } else {
        showHide = 'none';
    }
    //update the id squid = to var showHide
    squid.style.display = showHide;
    
    //Repeat the process every 2 seconds
    console.log('in');
    setTimeout(inOut, 1000)
}

inOut();