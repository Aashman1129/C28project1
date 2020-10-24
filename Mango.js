class Mango{
constructor(x,y,r){
var options={
isStatic:true,
restitution:0,
friction:1
}
 this.body=Bodies.circle(x,y,r,options);
 this.image=loadImage("mango.png");
 this.r=r;
World.add(world,this.body);
}
display(){
var pos =this.body.position;
var angle = this.body.angle;
imageMode(CENTER);
image(this.image,pos.x,pos.y,20,20);

}
}