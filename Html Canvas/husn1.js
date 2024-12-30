let canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
c=canvas.getContext("2d");

let x=190;
let y=-120;

let dx=(Math.random()); //velocity
let dy=(Math.random());


let skeleton=document.querySelector("#skeleton");
function skeleton(){
  requestAnimationFrame(skeleton);
  c.clearRect(0,0,innerWidth,innerHeight);
  c.drawImage(skeleton,x,y);
     x+=dx;
     y+=dy;

}

