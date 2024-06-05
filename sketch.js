var img, x, y;
function preload() {
img = loadImage("heir.jpg");
}
function setup() {
createCanvas (400,400);
background(0);
noStroke();

}
function draw() {
background(0);
x = mouseX;
y = mouseY;
image( img, 0, 0);
var A = get(x, y);
fill(A);
rect (x,y,90,90);
}















