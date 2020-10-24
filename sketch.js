
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var tree;
var stone;
var image;
var mango1,mago2,mango3,mango4,mango5,mango6;
var rope;
function preload()
{
boyImage=loadImage("boy.png");
}

function setup() {
    createCanvas(1200, 600);
    

	engine = Engine.create();
	world = engine.world;

ground = new Ground(500,570,1500,50);
tree= new Tree();
stone=new Stone(420,490,20);
mango1=new Mango(750,300,5);
mango2=new Mango(850,350,5);
mango3=new Mango(730,360,5);
mango4=new Mango(800,400,5);
mango5=new Mango(700,400,5);
mango6=new Mango(795,350,5);
mango7=new Mango(880,400,5);
rope=new Chain(stone.body,{x:420,y:470});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  image(boyImage,400,425,100,170);
detectcollision(stone.body,mango1.body);
detectcollision(stone.body,mango2.body);
detectcollision(stone.body,mango3.body);
detectcollision(stone.body,mango4.body);
detectcollision(stone.body,mango5.body);
detectcollision(stone.body,mango6.body);
detectcollision(stone.body,mango7.body);

  ground.display();
  tree.display();
  stone.display();
 
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();



rope.display();



  drawSprites();
 
}
function detectcollision(Istone,Imango){
  
  var mangoBodyPosition=Imango.position;
  var stoneBodyPosition=Istone.position;
  var distance=dist( stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance<=Imango.r+Istone.r){
    console.log("hello");
  Matter.Body.setStatic(Imango.body,false);
  }

}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.fly();
  
}



