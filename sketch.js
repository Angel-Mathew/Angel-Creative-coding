let mic; 
let colours = [ // array of colors 
  "#FF4365",
  "#812333",
  "#030301",
  "#42131A",
  "#C0334C"
]

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	mic = new p5.AudioIn(); // code to let the get the audio from the mic 
	mic.start();
}

function draw() {
	
	let micLevel = mic.getLevel() * height * 3; // when there is an audio, it increases 
	fill(random(colours));
    rect(mouseX,mouseY,micLevel);
    //triangle(mouseX,mouseY,20,25,30,35);
	circle(mouseX,mouseY,20);//  positions based from mouse interaction
}
