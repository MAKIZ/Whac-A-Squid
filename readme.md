# Whack-A-Squid

![Image of wirframe](/images/Wireframe.png)
![Image of draft](/images/Draft.jpg)

## What is Whack-The-Squid?

It is based on the arcade game Whack-A-Mole. Once the game starts, the squids will begin to pop up from their holes at random places in 60 seconds. The objective of the game is to force the individual squid back into their holes by hitting them directly with the cursor, thereby adding to the player's score. The quicker you click the quids the higher the final score will be.

## Technical Discussion

> I use HTML5, CSS & Vanilla Javascript in creating this game. 

### Notes on Game Structure

### This is a sample of my HTML Code for my scoreboard
> ``` <div class="scoreboard">
                    <div>TIME  <span id="timer">60</span></div>
                    <div onclick="start(); disabled=true" id="button">START</div>
                    <div>SCORE  <span id="score">0</span></div>
</div>

### This is a sample of my CSS Code for my Coral and Squids

``` .coral-top {
    box-sizing: border-box;
    justify-content:  flex-end;
    width: 120px;
    height: 160px;
    position: relative;
    top: 130px;
    left: 30%;
    overflow: hidden;                   
}

.coral-top:after {
    background: url('../images/coral-top.png');
    width: 120px;
    height: 160px;
    content: "";
    position: absolute;
    pointer-events: none;
}   

## The Making of [Your Game]

> Any credits or notes you feel you should add

## Opportunities for Future Growth

> If you had more time to work on your game, what would you do?
