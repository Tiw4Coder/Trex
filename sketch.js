var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacles, obstacle1, obstacle2, obstacle3, obstacle4;
var obstacle5, obstacle6;
var cloud,cloudI;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  
  obstacle1 = loadImage("obstacle1.png")
  obstacle2 = loadImage("obstacle2.png")
  obstacle3 = loadImage("obstacle3.png")
  obstacle4 = loadImage("obstacle4.png")
  obstacle5 = loadImage("obstacle5.png")
  obstacle6 = loadImage("obstacle6.png")
  
  cloudI = loadImage("cloud.png")
  
  
  
  
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background("white");
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  spawnClouds();
  
  spawnObstacles();
  
  drawSprites();
  
  
}


function spawnObstacles() 
{
  if (frameCount % 90===0) {
  obstacles = createSprite(300,165,10,30);
  obstacles.velocityX = -2;
  obstacles.scale = 0.65;
  var rand = Math.round(random(1,6));
  switch(rand){
    case 1 : obstacles.addImage(obstacle1);
  break;
    case 2 : obstacles.addImage(obstacle2);
  break;
    case 3 : obstacles.addImage(obstacle3);
  break;
    case 4 : obstacles.addImage(obstacle4);
  break;
    case 5 : obstacles.addImage(obstacle5);
  break;
    case 6 : obstacles.addImage(obstacle6);
  break;
    default: break;}
  }
}

function spawnClouds()
{
  if (frameCount % 140===0) 
  {
cloud = createSprite(550,100,20,20);
cloud.velocityX = -5;
cloud.addImage(cloudI);
  }
}


















