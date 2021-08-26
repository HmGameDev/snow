const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bgimg;

function preload() {
bgimg = loadImage ("snow3.jpg");


}
function setup() {
    
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  if(frameCount % 50 === 0)
  {
    for(var i=0; i<200; i++)
    {
      snow.push
    }
  }

}



function draw() {
  background(255,255,255);  
  drawSprites();
}