
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var ground;
var box1, box2, box3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color("yellow");

	box1 = createSprite(650,649,200,20);
	box2 = createSprite(550,610,20,100);
	box3 = createSprite(750,610,20,100);
	box2 = addImage("dustbingreen.png"); 

	box1.shapeColor = color("red");
	box2.shapeColor = color("red");
	box3.shapeColor = color("red");

	paperBall = new Ball(200,200,50,50);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:150,y:150})
	}
}
function draw() {
  rectMode(CENTER);
  background(0);

	rect(width/2, 650, width, 10 );
	

 paperBall.display();
 
  
  drawSprites();
 
}



