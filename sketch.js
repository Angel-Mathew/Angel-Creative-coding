var count = 1; 
var c; 
function setup() { 
c = createCanvas(600, 400); 
background(255); 
noStroke(); 
} 
function draw() { 
if (mouseIsPressed) { 
  fill(224,109,6); 
  rect(mouseX, mouseY, 30, 30); 
  fill(255,197,58);
  rect(mouseX,mouseY,20,20);
   fill(240,153,32);
  ellipse(mouseX,mouseY,10,10)
} 
} 
function keyPressed() { 
if (keyCode == 65) { 
  saveCanvas(c, 'canvasName' + count, 'jpg'); 
  count++; 
} 
}




