function setup() { 
createCanvas(600, 400);
background(255); 
stroke(0,0,255); 
noFill(); 
strokeWeight(3); 
translate(0, height/2); 
beginShape(); 
var noiseCount= 0;//starts with 0 
//start from 0,it will loop depending on the given width,
//then i is increased by 1
for(var i= 0; i< width; i+= 1) { 
var ranY= noise(noiseCount); //position for y
vertex(i, ranY* 100);//point
noiseCount+= 0.02; 
} 
endShape();

}
