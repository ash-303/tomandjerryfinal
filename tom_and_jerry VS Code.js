var garden;
var jerry, jerry1, jerry2, jerry3, jerry4;
var tom, tom1, tom2, tom3, tom4;
function preload() {
    garden=loadImage("garden.png");
    jerry1=loadImage("jerryOne.png");
    jerry2=loadImage("jerryTwo");
    jerry3=loadImage("jerryThree.png");
    jerry4=loadImage("jerryFour.png");
    tom1=loadImage("tomOne.png");
    tom2=loadImage("tomTwo.png");
    tom3=loadImage("tomThree");
    tom4=loadImage("tomFour");
}

function setup(){
    createCanvas(1000,800);
    jerry.createSprite=(50,180,20,50);

    jerry.addAnimation(jerry1);
    jerry.addAnimation(jerry2);
    jerry.addAnimation(jerry3);
    jerry.addAnimation(jerry4);
    jerry.scale=0.5;
     
    tom.createSprite(100, 180, 20, 50);
    tom.addAnimation(tom1);
    tom.addAnimation(tom2);
    tom.addAnimation(tom3);
    tom.addAnimation(tom4);
    //create tom and jerry sprites here
    
    garden.createSprite(200,180,400,20);
    garden.addImage("garden");
    garden.x=ground.width/2;
}

function draw() {

    background(garden);
    if(tom2,tom3.isTouching(jerry3))
    {
       jerry.changeAnimation("jerry4");
       tom.changeAnimation("tom4");
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}



function keyPressed(){

  if(keyCode=== LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("catRunning");
  }


}
