canvas=document.querySelector("canvas");
c=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

class animation{
  constructor(x,y,dx,dy,radius){
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.radius=radius;
  }
  draw(){
  c.beginPath();
  c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
  c.strokeStyle="red";
  c.stroke();
  }
  update(){
    
    if(this.radius+this.x>innerWidth || this.x-this.radius<0){
      this.dx=-this.dx
    }
    if(this.radius+this.y>innerHeight || this.y-this.radius<0){
      this.dy=-this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;
    this.draw();
   
  }
}
let circlearray=[];
for(let i=0;i<100;i++){
  
let x=Math.random() * innerWidth;
let y=Math.random() * innerHeight;
let dx=(Math.random()-0.5); //velocity
let dy=(Math.random()-0.5);
radius=100;
circlearray.push(new animation(x,y,dx,dy,radius));
}

function animate2() {
  requestAnimationFrame(animate2);
  c.clearRect(0,0,innerWidth,innerHeight) ;
  for(i=0;i<circlearray.length;i++){
  circlearray[i].update();
}
}
animate2();









