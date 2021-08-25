const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball;

var rope1;
var con;

var ball2;

var rope2;
var con2;

var ball3;
var con3;

var ball4;
var con4;

var ball5;
var con5


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options = {
		restitution: 1,
		friction:0,
		density: -8,
		isStatic: false
		
	}

	ball = Bodies.circle(250,285,30,ball_options);
  	World.add(world,ball);


  	ball2 = Bodies.circle(290,285,12,ball_options);
  	World.add(world,ball2);



  	ball3 = Bodies.circle(330,285,10,ball_options);
  	World.add(world,ball3);



	ball4 = Bodies.circle(370,285,10,ball_options);
  	World.add(world,ball4);



	ball5 = Bodies.circle(410,285,10,ball_options);
  	World.add(world,ball5);  

	
	rope1 = new Rope(ball, roof, -80, 0);
	rope2 = new Rope(ball2, roof, -40, 0);
	rope3 = new Rope(ball3, roof, 0, 0);	
	rope4 = new Rope(ball4, roof, 40, 0);
	rope5 = new Rope(ball5, roof, 80, 0);
	
    Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);

  rect(roof.position.x,roof.position.y,230,20);

  ellipse(ball.position.x,ball.position.y,30);
  ellipse(ball2.position.x,ball2.position.y,30);
  ellipse(ball3.position.x,ball3.position.y,30);  
  ellipse(ball4.position.x,ball4.position.y,30); 
  ellipse(ball5.position.x,ball5.position.y,30); 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed() {
  if(keyCode == UP_ARROW) {
      Matter.Body.applyForce(ball5,{x:0,y:0},{x:20,y:0});
    }
}