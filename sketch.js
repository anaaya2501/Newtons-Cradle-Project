//NAMESPACE: NICK NAMES
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var myroof;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
var gameState = "onSling";
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	//1.create engine
	//2.connect world to engine
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	myroof = new Roof();
	ball1 = new Ball(600,300);
	ball2 = new Ball(650,300);
	ball3 = new Ball(700,300);
	ball4 = new Ball(750,300);
	ball5 = new Ball(800,300);
	rope1 = new Rope(ball1.body,myroof.body,-100);  
	rope2 = new Rope(ball2.body,myroof.body,-50) ;
	rope3 = new Rope(ball3.body,myroof.body,0);  
	rope4 = new Rope(ball4.body,myroof.body,50) ;
	rope5 = new Rope(ball5.body,myroof.body,100);  
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  myroof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function mouseDragged(){
	if (gameState!=="launched"){
	   Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
   }
}



