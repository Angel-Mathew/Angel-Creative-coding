//Variables declared by let are only available inside the block where they're defined.

//clip - allows to hide all parts of the bottom
//
let img;

function preload(){
  img=loadImage("riding.jpg")
}
function setup() {
  createCanvas(520,520);
  background(245,238,158);
 
    //image inside shape, using mask function - works with multiple shapes
  img.resize(200,200);
  let cnv5 = createGraphics(200,200);
  cnv5.ellipse(100,120,100);
   cnv5.rect(10,160,130);
  cnv5.triangle(5,5,120,210,210,5);
 
  img.mask(cnv5);
  image(img,300,25);
 
  //rectangle inside circle / circle inside rectangle using clip function
  cnv1 = createGraphics(width, height);
  ctx1 = cnv1.canvas.getContext("2d");
  cnv1.strokeWeight(3);
  cnv1.fill(255,249,236)//color of the rect
  cnv1.rect(30, 35, 150);  
  ctx1.clip();
  cnv1.fill(255, 220, 204); //color of the shapes
  cnv1.circle(80, 50, 90);  
  cnv1.circle(100,100,50);
cnv1.circle(2,200,150);
 cnv1.rect(130,160,50)
image(cnv1, 50, 50);
    

}
