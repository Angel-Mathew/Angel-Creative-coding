var img;
function preload() {
img = loadImage("sea.jpg");
}
function setup () {
createCanvas (170,305);
background(0);
}
function draw() {
background(0);
image(img, 0, 0);
filter(INVERT);
}

