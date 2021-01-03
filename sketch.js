var helicopterIMG, helicopterSprite, packageSprite,packageIMG,redboxpart1,redboxpart2,redboxpart3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	redboxpart1=createSprite(220,600,20,100);
	redboxpart1.shapeColor=("red");

	redboxpart2=createSprite(385,650,350,20);
	redboxpart2.shapeColor=("red");

	redboxpart3=createSprite(550,600,20,100);
	redboxpart3.shapeColor=("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
    var pos = packageBody.position;
	var angle = packageBody.angle;
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.setStatic(packageBody, false);
	 }
   }
   
   function show() {
	   redBoxpart1.display();
	   redBoxpart2.display();
	   redBoxpart3.display();
   }

