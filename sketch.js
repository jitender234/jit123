var ship,ship_running,ship_collided;
var sea,invisibleSea,seaImage;


function preload(){
seaImage =loadImage("sea.png");
ship_running =loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
 //create sea
sea=createSprite(400,200);
sea.addImage("sea",seaImage);
sea.x =sea.width /8
sea.scale=0.5
sea.velocityX= -4
ship=createSprite(200,200);
  ship.addAnimation("running",ship_running);
  ship.scale=0.5
}

function draw() { 
  background("blue");
  sea.velocityX=-4
  if(sea.x<0){
    sea.x=sea.width/8
  }
 drawSprites();
}