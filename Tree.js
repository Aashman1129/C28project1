class Tree{
constructor(){
  var options={
    isStatic:true } 
  this.bodybottom= Bodies.rectangle(800,440,200,20,options);
  this.width1=200;
  this.height1=20;
  
  this.bodyleft= Bodies.rectangle(750,440,20,100,options);
  this.width2=20;
  this.height2=100;
      
  this.bodyright= Bodies.rectangle(850,440,20,100,options);
  this.width3=20;
  this.height3=100;

  this.image=loadImage("tree.png");

World.add(world,this.bodybottom);
World.add(world,this.bodyleft);
World.add(world,this.bodyright);
}
display(){
    var bottom=this.bodybottom.position;
    var boxLeft=this.bodyleft.position;
    var boxRight=this.bodyright.position;
    imageMode(CENTER);
    
    image(this.image,bottom.x,bottom.y,300,350);
}
}