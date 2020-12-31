

var car,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	//speed=random(100,150);//color of the car will become red
	//speed=random(60,100);//color of the car will become yellow
	speed=random(40,60);
	weight=random(1000,1500);


	car=createSprite(200, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor="pink";


  
  	wall=createSprite(1200,200, 60, height/2)
  	wall.shapeColor="brown";
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)// for collision and then deformation will happen
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		car.shapeColor="red";
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor="yellow";
	}

	if(deformation<100)
	{
		car.shapeColor="green";
	}
  }  
  
  drawSprites();
 
}


