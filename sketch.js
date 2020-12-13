var wall,car;
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
weight=random(400,1500)
  car =createSprite(50, 200, 50, 50);
car.velocityX=speed
car.shapeColor=color(225)
wall=createSprite(1400,200,60,height/2)
wall.shapeColor=color("black")
}

function draw() {
  background(255,255,255);  

if(wall.x-car.x<(car.width+wall.width)/2){

  car.velocityX=0;
  var deforastation=0.5*weight*speed*speed/22509
  if (deforastation>180)
  {
    car.shapeColor=color("red")
  }
  if(deforastation<180&&  deforastation>100){
    car.shapeColor=color("blue")
  }
if(deforastation<100)
{
  car.shapeColor=color("yellow")
}
}



  drawSprites();
}