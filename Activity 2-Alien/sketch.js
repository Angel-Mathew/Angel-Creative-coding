function setup() {
  createCanvas(500,500);
}

  function draw() {
  background(0,150,255);
  //head
  fill(144,238,144);
  ellipse(176,100,110,160);
  //right eye 
  fill(0,0,0);
  ellipse(150,50,20,20);
  //left eye
  fill(0,0,0);
  ellipse(190,50,20,20);
  //mouth
  fill(255,255,255);
  ellipse(176,109,90,40);
  //body
  fill(144,238,144);
  ellipse(175,270,120,200);
  //left anteena
   ellipse(132,30,10,40);
  //right anteena
    ellipse(220,30,10,40);
  //left hand
    beginShape()
    vertex(0,100)
    bezierVertex(100,100,110,130,125,215)
    endShape()
  //Space vechile
    fill(161,13,13)
  rect(190,280,250,100);
  rect(190,355,250,12);
//space vechile's top 
  triangle(280,180,180,280,380,280); 

