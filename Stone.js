
 class Stone{
  constructor(x,y,r){
  var options={
  isStatic:false,
  restitution:0,
  friction:1,
  density:1.2
  }
   this.body=Bodies.circle(x,y,r,options);
   this.image=loadImage("stone.png");
   
  World.add(world,this.body);
  }
  display(){
  var pos =this.body.position;
  var angle = this.body.angle;
  imageMode(CENTER);
  image(this.image,pos.x,pos.y,20,20);
  
  }
 
  }
  