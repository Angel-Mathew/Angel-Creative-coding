// We created variable named images and font1
var images
var font1

// To retrieve the file, we used function preload()
function preload() {
    // image file is stored in variable images
    images = loadImage("Triangle.gif");
    // font file is stored in variable font1
    font1= loadFont ("BlackOpsOne-Regular.ttf");
}

//We created function named backgroundInteractive() to make background interactive by using mouse movement
function backgroundInteractive() {
  
  // It will rotate towards center of the screen depending on the movement of the mouse
  angle =map(mouseX, mouseY, width, 0, TWO_PI); 
  
  // We changed position of origin to center of the screen
  translate(width/2,height/2); 
  rotate(angle); 
  
  // Muliple squares that rotate towards center of the screen
  rect (0,0,100,100,100)
  rect (100,100,100,100)
  rect (200,200,100,100)
  rect (300,300,100,100)
  rect (400,400,100,100)
  rect (500,500,100,100)
  rect (-100,-100,100,100)
  rect (-200,-200,100)
  rect (-300,-300,100)
  rect (-400,-400,100)
  rect (-500,-500,100)
  rect (100,-100,100,100)
  rect (-100,100,100,100)
  rect (0,-200,100,100)
  rect (0,200,100)
  rect (200,0,100)
  rect (-200,0,100)
  rect (-100,300,100)
  rect (100,-300,100)
  rect (-300,100,100)
  rect (300,-100,100)
  rect (-500,100,100)
  rect (500,-100,100)
  rect (300,100,100)
  rect (400,0,100)
  rect (-400,0,100)
  rect (-300,-100,100)
  rect (-400,-200,100)
  rect (-100,-300,100)
  rect (400,-200,100)
  rect (200,-200,100)
  rect (300,-300,100)
  rect (-200,200,100)
  rect (400,200,100)
  rect (500,100,100)
  rect (500,300,100)
  rect (500,-300,100)
  rect (-500,-300,100)
  rect (-500,-100,100)
  rect (-500,300,100)
  rect (-400,200,100)
  rect (-300,300,100)
  rect (100,300,100)
  rect (0,400,100)
  rect (0,-400,100)
  rect (200,400,100)
  rect (-200,400,100)
  rect (-200,-400,100)
  rect (200,-400,100)
  rect (300,500,100)
  rect (-300,500,100)
  rect (-300,-500,100)
  rect (300,-500,100)
  rect (100,-500,100)
  rect (-100,-500,100)
  rect (100,500,100)
  rect (-100,500,100)
  rect (-600,-200,100)
  rect (600,-200,100)
  rect (600,200,100)
  rect (-600,200,100)
  rect (-600,0,100)
  rect (600,0,100)
  rect (-700,100,100)
  rect (700,100,100)
  rect (700,-100,100)
  rect (-700,-100,100)
  rect (-700,-300,100)
  rect (700,-300,100)
  rect (700,300,100)
  rect (-700,300,100)
  rect (-200,600,100)
  rect (0,600,100)
  rect (200,600,100)
  rect (200,-600,100)
  rect (0,-600,100)
  rect (-200,-600,100)
  rect (-300,-700,100)
  rect (-100,-700,100)
  rect (100,-700,100)
  rect (300,-700,100)
  rect (-300,700,100)
  rect (-100,700,100)
  rect (100,700,100)
  rect (300,700,100)
  rect (-400,400,100)
  rect (400,-400,100)
  rect (-500,500,100)
  rect (500,-500,100)
  rect (-600,400,100)
  rect (600,-400,100)
  rect (-400,600,100)
  rect (400,-600,100)
 rect (400,600,100)
  rect (-400,-600,100)
  rect (-600,-400,100)
  rect (600,400,100)
}

//We created function named mousePointer() to attach the gif image along with the mouse cursor
function mousePointer() {
  
  // image (variable, horizontal position ofthe mouse cursor, vertical position of the mouse cursor, height of the image, width of the image) argument
  image(images, mouseX-100, mouseY - 100,200,200);
}

//We created function named fontStyle() to insert the text with different font style
function fontStyle() {
  fill (255)
  var word= "Welcome to Bath Spa University" // text
  textFont (font1,65);  // (font style, size of the text) argument
  textAlign (CENTER); 
  text(word, width/2,height/2-85); // (text, horizontal position of the text, vertical position of the text) argument
}

// We created function named distInteractive() to make it appear/disappear of the text depending on the movement of the mouse
function distInteractive() {
  //the text appears when the mouse cursor is on center of the screen and it will guadually dissapers when the mouse cursor is moving away from the center of the screen
  var d = dist(width/2, height/2, mouseX, mouseY); 
  ellipse(width/2, height/2+25, d*2, d*2); // ellipse size increases/ decreases depending on the movement of the mouse
}

function setup() {
  createCanvas(windowWidth, windowHeight); // it sets canva to full height of the screen and full width of the screen
  rectMode(CENTER) // it sets position of (x,y) of a shape to center of the shape
}

function draw() {
  background("#40679E")  // it sets background color of the screen
  noStroke();  // it removes borders of the shapes
  
  fontStyle() // it will call function fontStyle() and execute its function
  fill ("#40679E") // this color will apply to distInteractive() function
  distInteractive() // it will call function distInteractive() and execute its function
  mousePointer() // it will call function mousePointer() and execute its function
  fill (28, 22, 120,75);  // this color will apply to backgroundInteractive() function
  backgroundInteractive() // it will call function backgroundInteractive() and execute its function

}


