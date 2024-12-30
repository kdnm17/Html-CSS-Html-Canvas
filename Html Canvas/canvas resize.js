let canvas=document.querySelector("canvas");
let c=canvas.getContext("2d");
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

//.fillrect(x,y,width,height)--rectangle
// c.fillStyle="lightblue";
c.fillRect(0,0,100,100); //if we want colour to rectangle use fillstyle before rect
// c.fillStyle="lightpink";
c.fillRect(1000,300,100,100);
c.fillRect(500,400,100,100);


// line
c.beginPath();
c.moveTo(200,900); //(x,y)
c.lineTo(400,600);
c.strokeStyle='brown';
c.lineTo(300,300);
c.strokeStyle='red'; //only one colour is applicalble to lines
c.stroke();


//arc
c.beginPath();  //to begin the path
c.arc(1000,500,50,0,Math.PI*2,false);  //.arc(x,y,radius,start angle in radians , end angle in radians , anticlockwise)
c.strokeStyle='#0000f1';
c.stroke();   //to give the appeareance


// multiple circles
for(let i=0;i<6;i++){
  x=Math.random()*window.innerWidth;
  y=Math.random()*window.innerHeight;
  color=
  c.beginPath();  
  c.arc(x,y,50,0,Math.PI*2,false);
  c.strokeStyle='red';
  c.stroke();
}

for(let i=0;i<=100;i++){
  c.beginPath();
  c.arc(200+i,200+i,100,0,Math.PI*2,false);
  c.strokeStyle="red";
  c.stroke();
}

