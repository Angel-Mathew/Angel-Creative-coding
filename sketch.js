var circleSize=80;
function setup() {
  createCanvas(400, 400);
  background(255);
  translate(circleSize/2,circleSize/2);
//for loop is considering the width and height of the canvas
for(var x=0;x<width;x+=circleSize){
  for(var y=0;y<height;y+=circleSize){
    fill(1,1,1);
    ellipse(x,y,circleSize*1.2,circleSize*1.2);
    fill(255,0,0);
    ellipse(x,y,circleSize*0.8,circleSize*0.8);
    fill(253,8,131);
    ellipse(x,y,circleSize*0.3,circleSize*0.3);  
  }
}
}


