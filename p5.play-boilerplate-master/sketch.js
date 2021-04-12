var fxedRect,movingRect;

function setup() 
{
  createCanvas(1200,800);
  
  fixedRect = createSprite(200, 200, 100, 50);
  fixedRect.shapeColor="green";
  movingRect = createSprite(300,300,100,50);
  movingRect.shapeColor="green";
}

function draw() {
  background(0,0,0); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  drawSprites();
}

