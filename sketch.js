var player1,player1img,player2,player2img;
var cmdImg;
var START2 = 4;
var START3 = 5;
var START = 1;
var LEVEL1_PLAY = 2;
var LEVEL2_PLAY = 3;
var END = 0;
var gamestate = START;

function preload() {
  cmdImg=loadAnimation("images/cmd1.png","images/cmd2.png","images/cmd3.png")
  player1img=loadImage("images/player1.png")
  player2img=loadImage("images/player2.png")
}
function setup() {
  createCanvas(1000,500);

  player1 = createSprite(400,325,50,50)
  player1.addImage("abc",player1img)
  player1.scale =0.4;


  
}

function draw() {
  background("aquamarine");
 if (gamestate === START){
    
 console.log(getFrameRate());
 setFrameRate(20);
  
  player2 = createSprite(600,325,50,50)
  player2.lifetime=10;
  player2.addImage("acd",player2img);
  player2.scale =0.2;
  
  
  fill ("red")
   textSize(40)
  text ("we two are friends forever",350,100)

  console.log(frameCount)

  if(frameCount === 200){
    gamestate = START2;
  }
  
 }

 else if(gamestate === START2){

player2.destroy();

fill("red")
textSize(40);
text ("my friend has been kidnaaped by monster ",200,50)
 
text ("you have 3 lifes to save your friend",200,120)


 }




  drawSprites()
}
