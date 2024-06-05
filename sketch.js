var font;
function preload(){
font=loadFont("BlackOpsOne-Regular.ttf");
}
function setup(){
createCanvas(400,400);
background(  186, 184, 108);
fill(255,35,48);//text color min 0 max 100
noStroke();
points=font.textToPoints("BSU",100,100,100,{sampleFactor:0.15});
//determines how many points generated 
for(var i=0;i<points.length;i++){// starts 0,then if i is less than length of the given points,i increased by 1
var p=points[i];
ellipse(p.x,p.y,random(2,15),random(2,15));
}

}
