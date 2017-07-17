# Whack-A-Squid

![Image of wirframe](/images/Wireframe.png)
![Image of draft](/images/Draft.jpg)

## What is Whack-The-Squid?

It is based on the arcade game Whack-A-Mole. Once the game starts, the squids will begin to pop up from their holes at random places in 60 seconds. The objective of the game is to force the individual squid back into their holes by hitting them directly with the cursor, thereby adding to the player's score. The quicker you click the quids the higher the final score will be.

## Technical Discussion

I use HTML5, CSS & Vanilla Javascript in creating this game. 

### Notes on Game Structure

### This is a sample of my HTML Code for my scoreboard
``` 
<div class="scoreboard">
                    <div>TIME  <span id="timer">60</span></div>
                    <div onclick="start(); disabled=true" id="button">START</div>
                    <div>SCORE  <span id="score">0</span></div>
</div>
```

### This is a sample of my CSS Code for my Coral and Squids.
 The coral will hold as a window to the squid hiding at the back of the coral. overflow "hidden" do the trick and also the border-box to keep the box in place. 

 The pseudo code after will insert the coral image with the help of content property. I add the property pointer-events "none" so that i can disable that div property when mouse click. This will help me to set my squid to be click.

 I set my squid in position absolute so that it keep in place with my coral.

```
.coral-top {
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

.squid {
    position: absolute; 
    background: url('../images/squid1.png');
    width: 118px;
    height: 160px;
    top: 160px;
    transition: .3s;
    cursor: pointer;
}
```

## The Making of [Your Game]

I did a lot of research to make my game i use google, stockoverflow, lynda, youtube a lot of reading and watching tutorials and also our GA lessons in every piece of the project. This was very tough project for me specially in using Javascript i dont have any javascript experience in the past only just now for 2 months. I spent most of my time working with javascript and it is very fulfilling i really love to learn how to program. I am okay using HTMl, CSS and i will continue to get better in javascript.

It takes a lot of time for the preparation doing wireframe and putting all together my ideas. All images This is a very rewarding project for me i can't imagine that i can make a game. I just love the felling of coding my own design.

All illustration is created by Mark Delos Reyes.

## Opportunities for Future Growth

If i have more time doing the game...

I will make a better interface.
I will add animation.
I will change my vanilla Js to jquery.
I will add sounds
