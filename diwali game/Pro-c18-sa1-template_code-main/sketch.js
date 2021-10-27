var bg;
var shot;
var cracker;
var shot2;
var ground;
var rocket;
var diwali;
var boy;
var sparkler;
var shotsound;
var rocketSound;
var rocketshot;
var flower;
var star;
var rocket2;
var star2;
var rocketshot2;
var diwali2;
var Rocket;
var Rocket2;
var rocket3;
var Rocket3;
var rocket4;
var Rocket4;



function preload() {
  bgImg = loadImage("bg10.png");
  shotImg = loadAnimation("shot1.png","shot2.png");
  crackerImg = loadImage("cracker.png");
  rocketImg = loadImage("rocket.png");
  diwaliImg = loadImage("diwali.png");
  shotsound = loadSound("shotsound2.mp3");
  rocketSound = loadSound("rocket.mp3");
  rocketshotImg = loadImage("shot5.gif");
  flowerImg = loadImage("flower.png");
  starImg = loadImage("star3.png");
  rocket2Img = loadImage("rocket2.png");
  rocketshot2Img = loadImage("shot5.gif");
  diwali2Img = loadImage("diwali2.png");
  rocket3Img = loadImage("rocket20.png");
  rocket4Img = loadImage("rocket80.png");
  


  


}

function setup() 
{
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(200,200);
  bg.addImage(bgImg);

  cracker = createSprite(200,530);
  cracker.addImage(crackerImg);
  cracker.scale = 0.3;

  rocket = createSprite(800,530);
  rocket.addImage(rocketImg);
  rocket.scale = 0.5;


  diwali = createSprite(500,200);
  diwali.addImage(diwaliImg);
  diwali.scale = 0.4;
  diwali.visible = false;

  star = createSprite(1200,430);
  star.addImage(starImg);
  star.scale = 0.02;


  star2 = createSprite(100,430);
  star2.addImage(starImg);
  star2.scale = 0.02;


  rocket2 = createSprite(1000,530);
  rocket2.addImage(rocket2Img);
  rocket2.scale = 0.5;

 
  diwali2 = createSprite(500,500);
  diwali2.addImage(diwali2Img);
  diwali2.scale = 0.4;
  diwali2.visible = false;

 

  rocket3 = createSprite(300,560);
  rocket3.addImage(rocket3Img);
  rocket3.scale = 0.2;

  rocket4 = createSprite(1190,560)
  rocket4.addImage(rocket4Img);
  rocket4.scale = 0.2;
  




  rocketshot2 = createSprite(1000,100);
  rocketshot2.addImage(rocketshot2Img);
  rocketshot2.scale = 0.5;
  rocketshot2.visible = false;

 
  
  ground = createSprite(800,700,111000,200);
  ground.shapeColor = "violet";

  
}

function draw(){
  if(rocket.velocityY === -50){
    diwali.visible = true;
    

    
  }
  if(keyDown("up")){
    rocket.velocityY = -50;
    rocketshot = createSprite(800,130);
  rocketshot.addImage(rocketshotImg);
  rocketshot.scale = 0.5;
  rocketSound.play();
    
  


  }
  if(keyDown("right")){
    rocketSound.play();
    
    rocket3.velocityY = -40;
    rocket3.velocityX =  40
   
    
  
  
    
  


  }
 
  if(keyDown("space")){
    shot = createSprite(200,100);
    shot.addAnimation("shots",shotImg)
    shot.scale = 0.5;
   shot.lifetime = 30;
   shotsound.play();
   
   

  }
  if(keyDown("left")){
    rocket4.velocityY = -40;
    rocket4.velocityX = - 40
    rocketSound.play();
    
  

  }
  if(keyDown("down")){
    rocket2.velocityY = -50;
    rocketshot = createSprite(800,130);
  rocketshot.addImage(rocketshotImg);
  rocketshot.scale = 0.5;
  rocketSound.play();
  rocketshot2.visible = true;
  diwali2.visible = true;
  
  }
  drawSprites();
  function Rocket4(){
    rocket4 = createSprite(1190,560)
    rocket4.addImage(rocket4Img);
    rocket4.scale = 0.2;
  

  }
  function Rocket3(){
    rocket3 = createSprite(300,560);
    rocket3.addImage(rocket3Img);
    rocket3.scale = 0.2
    
  

  }
  function Rocket2(){
    rocket2 = createSprite(1000,530);
    rocket2.addImage(rocket2Img);
    rocket2.scale = 0.5;
  

  }
  function Rocket(){
    rocket = createSprite(800,530);
    rocket.addImage(rocketImg);
    rocket.scale = 0.5;
  

  }
  var select_rocket = Math.round(random(1,3));
  var select_rocket2 = Math.round(random(1,3));
  var select_rocket3 = Math.round(random(1,3));
 
  
  
  if (World.frameCount % 100 == 0) {
    if (select_rocket == 1) {
      Rocket();
    } else if (select_rocket2 == 2) {
      Rocket2();
    } else if (select_rocket3 == 3) {
      Rocket3();
    
    }else{
      Rocket4();
    }
  }
 

  

  
}
