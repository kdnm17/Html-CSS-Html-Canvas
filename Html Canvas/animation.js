let canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let c=canvas.getContext("2d");

// let y=200;
// function animate1(){
//   requestAnimationFrame(animate1);
//   c.beginPath();
//   c.arc(y,500,100,0,Math.PI*2,false);
//   c.strokeStyle="red";
//   c.stroke();
//   y+=1;
// }
// animate1();


//max value of Math.random() is 1 and is always positive
let x=Math.random() * innerWidth;
let y=Math.random() * innerHeight;
let dx=(Math.random()-0.5) * 40; //velocity
let dy=(Math.random()-0.5) * 40;
radius=100;
function animate2(){
  requestAnimationFrame(animate2);
  c.beginPath();
  c.clearRect(0,0,innerWidth,innerHeight) ;//( clear from x=0,y=0 to x=innerwidth,y=innerheight)
  c.arc(x,y,radius,0,Math.PI*2,false);
  c.strokeStyle="red";
  c.stroke();
  if(radius+x>innerWidth || x-radius<0){
    dx=-dx
  }
  if(radius+y>innerHeight || y-radius<0){
    dy=-dy;
  }
  x+=dx;
  y+=dy;

}
animate2();

