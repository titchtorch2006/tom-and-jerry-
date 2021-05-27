// variables
var cat,cat1Img,cat2Img,cat3Img,cat4Img;
var mouse,mouse1Img,mouse2Img,mouse3Img;
var garden,gardenImg;

  
function preload() {
    //load the images here
  cat1Img =loadImage("cat_laid.png");
  cat2Img =loadImage("cat_stood.png");
  cat3Img =loadAnimation("cat_walk1.png","cat_walk2.png");
  mouse1Img =loadImage("mouse_cheese.png");      mouse2Img=loadAnimation("mouse_tease1.png","mouse_tease2.png");
  
  
  gardenImg =loadImage("garden.png");
}
function setup() {
 
   createCanvas(1000,800); 
  
  cat = createSprite(900,700,50,50);
  cat.addAnimation("cat_stood.png", cat2Img);
  cat.scale = 0.5;
  
    //create tom and jerry sprites here
   mouse =createSprite(50,700,20,20);
  cat.addAnimation("tease", mouse2Img);
  cat.addAnimation("tease1", mouse3Img);
  
  garden = createSprite(1000, 800);
  garden.addImage("garden",gardenImg);
}

function draw() {
  background(0);
      //Write condition here to evalute if tom and jerry collide
 
 
  if (cat.x - mouse.x < mouse.width/2 + cat.width/2 && mouse.x - cat.x < mouse.width/2 + cat.width/2 && cat.y - mouse.y < mouse.height/2 + cat.height/2 && mouse.y - cat.y < mouse.height/2 + cat.height/2) 

    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
if (keyDown("leftArrow")){
   cat.velocityX =-3
  cat.changeAnimation("walking", cat3Img);
  if (cat.x - mouse.x < mouse.width/2 + cat.width/2 && mouse.x - cat.x < mouse.width/2 + cat.width/2 && cat.y - mouse.y < mouse.height/2 + cat.height/2 && mouse.y - cat.y < mouse.height/2 + cat.height/2)
     cat.changeAnimation("laid", cat1Img); 
     mouse.changeAnimation("cheese", mouse1Img);  } 
     else { cat.chageAnimation("walking",cat3Img);
      mouse.changeAnimation("tease", mouse2Img);  }
}
