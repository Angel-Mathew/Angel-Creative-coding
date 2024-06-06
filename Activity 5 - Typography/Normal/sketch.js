var word="BSU "
var font1;
function preload(){
font1=loadFont("BlackOpsOne-Regular.ttf");

}
function setup(){
  createCanvas(800,500);
  background(255,0,0);
  fill(0,0,255);
  
  textFont(font1,100);
  textAlign(CENTER);
  text(word,width/2,height/2);
}
