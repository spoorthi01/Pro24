var paper;
var bin,bottom,side1,side2;
var world;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	paper = new Paper(20,640);
	bin = new Bin();

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 ground.shapeColor = color("yellow")

	Engine.run(engine);

}


function draw() {
  background(0);

  paper.display();
  bin.display()


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:22,y:-84});
	}
}



