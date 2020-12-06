var movingshape,movingfixed
function setup() {
  createCanvas(800,400);
  movingshape=createSprite(400, 200, 50, 50);
  movingfixed=createSprite(300,200,50,50);
  movingfixed.shapeColor="purple";
  movingshape.shapeColor="red";
}
function draw() {
  background(255,255,255); 
  movingshape.y=World.mouseY;
  movingshape.x=World.mouseX;
  if (movingshape.x-movingfixed.x<movingshape.width/2+movingfixed.width/2&&
    movingfixed.x-movingshape.x<movingshape.width/2+movingfixed.width/2&&movingshape
    .y-movingfixed.y<movingshape.height/2+movingfixed.height/2&&movingfixed.y-movingshape.y<
    movingfixed.height/2+movingshape.height/2)
     {
    movingfixed.shapeColor="yellow";
    movingshape.shapeColor="green";   
  } else {
    movingfixed.shapeColor="purple";
    movingshape.shapeColor="red";  
  } 
  drawSprites();

  
}