
var trex ,trex_running;
var ground;

function preload(){

trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200)
  // cria o sprite do trex
  trex = createSprite(50,160,20,50);
  ground = createSprite(200,180,400,20);
  trex.addAnimation("running", trex_running);

  trex.scale = 0.5;
  trex.x = 50;
 
 
}

function draw(){
  background("white");
  drawSprites();

  if(keyDown('space')){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.5;

  trex.collide(ground);

}
