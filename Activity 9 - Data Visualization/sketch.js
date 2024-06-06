var table;
var studyingHours = [];
var days = [];
var colors = [
	" #E06C9F", 
	" #F283B6", 
	" #EDBFB7", 
	" #F0C1B7", 
	" #EFB0B7", 
];

//Global Variables for the background Stars
let stars_x = [];
let stars_y = [];
let stars_cnt = 50;


//Acquiring Data from a CSV file
function preload() {
  table = loadTable("studyhours.csv", "csv", "header");
}

//filtering data
function setup() {
	createCanvas(800,600);
	days = table.getColumn("Days");
	studyingHours = table.getColumn("Studying Hours");
  for(let i=0; i<stars_cnt; i++) {
    append(stars_x, random(width));
    append(stars_y, random(height));
  } 
}
									 
function draw() {
	background(67,90,157);
   
  fill(0);
  fill("white");
  for(let i=0; i<stars_cnt; i++) {
    ellipse(stars_x[i], stars_y[i], 5, 5);
  }
	noStroke();
	textSize(50);
  text("Hours Spent for Studies", width/10, height/7);
  translate(width/3,height/4);
	
	//Representation - loop for chart based on hours spent at work each day
	for (var i = 0; i<studyingHours.length; i++){
		var mappedData = map(studyingHours[i],
											 min(studyingHours), 
											 max(studyingHours),100,400);
		fill(colors[i % colors.length]);
		rect(0,i*70, mappedData,45); 
		
	//Interaction - reveal number of hours alongside bars
		if (mouseY > 120 && mouseX > 260){
		fill(0);
		textSize(12);
		text(studyingHours[i],mappedData+10,(i*70)+20);}
		push();
		
		//days label
		translate(-100,0);
    fill(0);
		textSize(16);
		textAlign(RIGHT);
	  text(days[i],70,(i*70)+25);
		pop();
	}
}