const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground1,ground2;

var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16;

var blocks1,blocks2,blocks3,blocks4,blocks5;
var blocks6,blocks7,blocks8,blocks9;

var slingo;
var score;
var poly1;
function setup() {
createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(390,300,250,10);
  ground2 = new Ground(700,200,200,10);
  
    block1 = new Block(300,275,30,40);
    block1.color = "red";
    console.log(block1);
    
    block2 = new Block(330,275,30,40);
    block2.color = "blue";
    
    block3 = new Block(360,275,30,40);
    block3.color = "black";
    
    block4 = new Block(390,275,30,40);
    block4.color = "yellow";
    
    block5 = new Block(420,275,30,40);
    block5.color = "green";
    
    block6 = new Block(450,275,30,40);
    block6.color = "pink";
    
    block7 = new Block(480,275,30,40);
    block7.color = "orange";
    
    block8 = new Block(330,235,30,40);
    block8.color = "purple";
    
    block9 = new Block(360,235,30,40);
    block9.color = "red";
    
    block10 = new Block(390,235,30,40);
    block10.color = "blue";
    
    block11 = new Block(420,235,30,40);
    block11.color = "black";
    
    block12 = new Block(450,235,30,40);
    block12.color = "yellow";
    
    block13 = new Block(360,195,30,40);
    block13.color = "green";
    
    block14 = new Block(390,195,30,40);
    block14.color = "pink";
    
    block15 = new Block(420,195,30,40);
    block15.color = "orange";
	  
    block16 = new Block(390,155,30,40);
    block16.color = "purple";
	
    blocks1 = new Block(640,175,30,40);
    blocks1.color = "brown";
    
    blocks2 = new Block(670,175,30,40);
    blocks2.color = "red";
    
    blocks3 = new Block(700,175,30,40);
    blocks3.color = "yellow";
    
    blocks4 = new Block(730,175,30,40);
    blocks4.color = "black";
    
    blocks5 = new Block(760,175,30,40);
    blocks5.color = "green";
	  
    blocks6 = new Block(670,135,30,40);
    blocks6.color = "purple";
    
    blocks7 = new Block(700,135,30,40);
    blocks7.color = "pink";

	  blocks8 = new Block(730,135,30,40);
    blocks8.color = "orange";
    
    blocks9 = new Block(700,95,30,40);
    blocks9.color = "blue";
    
    poly1 = new Shoot(200,270);

    slingo = new SlingShot(poly1.body,{x:134,y:84});

    score = 0;

}

function draw() {
  background(255,255,255);  
  //text(mouseX+":"+mouseY,mouseX,mouseY);
  Engine.update(engine);
  text("SCORE : "+ score,750,40);
  ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();
  slingo.display();
  poly1.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(poly1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingo.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingo.attach(poly1);
  }
}