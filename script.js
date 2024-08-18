var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0; //score
//Where to call jump
//hole to jump btwn is different each pipe
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    //var random = Math.random()*3;
    //var top = (random*100)+150;
    hole.style.top = random + "px"; //change hole top in style.css
    counter++;
});

setInterval(function() {
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping == 0){
         character.style.top = (characterTop+3)+"px"; //change character top in style.css
    }

    var blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = 
    parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    //+130 since height is 150 and bird is 20 px high
    if( (characterTop > 480) || ( (blockLeft < 20) && (blockLeft > -50) && ( (cTop < holeTop) || (cTop > holeTop+130) ) ) ){//if character top below screen bottom OR
        alert("Game over. Score: "+counter);
        character.style.top = 100 + "px";
        counter = 0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if( (characterTop>6) && (jumpCount<15) ){
            character.style.top = (characterTop-5)+"px"; 
        }
      
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
}
jump();