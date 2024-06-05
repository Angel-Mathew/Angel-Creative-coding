function setup() {
createCanvas(400,400);  
}
function draw(){
  background(65,212,255);
  fill(19,80,40)
  //rect(x,y,width,height)
  rect(200,150,150,50);
  fill(150,80,0)
  //ellipse(x,y,width,height)
  ellipse(230,200,35,35);
  ellipse(310,200,35,35);
  //triangle(x1,y1,x2,y2,x3,y3)
  triangle(100,100,200,200,100,200);  
  stroke(0);
  strokeWeight(3);
  //line(x1,y1,x2,y2)
  line(47,72,200,150);
}

