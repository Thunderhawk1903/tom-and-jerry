var bg, bgImg;
var cat, mouse;
var cat2Img, mouse2Img; 
var cat1Img, mouse1Img;
var canvas;
 
function preload() {
   bgImg=loadAnimation("garden.png");
   cat1Img=loadAnimation("cat1.png");
   mouse1Img=loadAnimation("mouse1.png")
cat2Img=loadAnimation("images/cat2.png","images/cat3.png")
mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png")

}

function setup(){
    canvas=createCanvas(1000,800);
 
    cat=createSprite(200,200);
  cat.addAnimation("cat1",cat1Img);
 
  mouse=createSprite(300,300) 
 mouse.addAnimation("mouse1",mouse1Img);
}

function draw() {

    background("bgImg");
    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.velocityX=0;

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseteasing");
mouse.frameDelay = 25;
cat.addAnimation("catrunning",catImg2)

}

}
