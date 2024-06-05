var dart = {
  a: 200,//variable a for the dart
  n: 450,//variable n for the dart 
}; 

x = 300; // x variable is used for the shot 
y = 600;// y variable is used for the shot 
vel = 0;//velocity of the shot
x2 = 20;// x2 is used for target 
y2 = 300;//y2 is used for target
vel2 = 4;//velocity for target
score = 0;//score
let startScreen = true;//start screen
let isGameOver = false;//Game over screen
let hasWon = false;//winning the game
let missedCount = 0;// count for missed target
let maxMisses = 4; // Number of allowed misses before game over
let winningScore = 5; // Score needed to win

function setup() {
  createCanvas(600, 600);// create a canvas of 600x600 pixels
}

function draw() {
  if (startScreen) {
    // Start screen display
    background(255, 235, 231);//background color 
    textAlign(CENTER);//text center
    textSize(32);//size of the the text
    text("Welcome to", width / 2, height / 3.5);// display text
    text("target game", width / 2, height / 2.5);// display text
    fill(0);// set text color to black
    text("Click to Start", width / 2, height / 1.5);// display text
  } else if (isGameOver) {
    // Game over screen
    background(6, 167, 125); // background color
    textAlign(CENTER);//text center
    fill(213, 198, 122); // set text color
    textSize(32);//size of the the text
    text("Game Over", width / 2, height / 3);// display text
    textSize(24);//size of the text
    text("Your Score: " + score, width / 2, height / 2);// display text
    text("Press any key to restart", width / 2, height / 1.5);// display text
  } else if (hasWon) {
    // Win screen
    background(199,62,29);//background color 
    textAlign(CENTER);//text center
    fill(0);// set text color to black
    textSize(32);//size of the text
    text("You Win!", width / 2, height / 3);// display text
    textSize(24); //size of the text
    text("Your Score: " + score, width / 2, height / 2);// display text
    text("Press any key to restart", width / 2, height / 1.5);// display text
  } else {
    //game screen
    background(8, 189, 189); // background color
    fill(242, 27, 63); // set color for rectangle
    rect(0, 625, 650, 60); // draw rectangle (ground)
    fill(172, 39, 32); // set color for ellipse (scoreboard)
    ellipse(490, 520, 88, 70); // draw ellipse (scoreboard)
    rect(485, 550, 10, 90); // draw rectangle (scoreboard base)
    fill(255, 255, 255); // set color for text
    textSize(14); // set text size
    text("SCORE", 480, 510); // display text
    textSize(25); // set text size
    text(score, 482, 535); // display score
    // Draw the dart
    fill(100); // set color for dart tip
    triangle(dart.a + 2.5, dart.n - 40, dart.a - 2.5, dart.n - 40, dart.a, dart.n - 50); // draw dart tip
    fill(25); // set color for dart body
    rect(dart.a - 2.5, dart.n - 40, 5, 40); // draw dart body
    fill(255, 0, 0); // set color for dart fins
    triangle(dart.a - 2.5, dart.n - 20, dart.a - 2.5, dart.n, dart.a - 5, dart.n); // draw left fin
    triangle(dart.a + 2.5, dart.y - 20, dart.a + 2.5, dart.n, dart.a + 5, dart.n); // draw right fin
    noStroke(); // disable outline
 // Draw the target
    fill(0, 0, 0); // set color for outer circle
    ellipse(x2, y2, 70, 70); // draw outer circle
    fill(255, 255, 255); // set color for second circle
    ellipse(x2, y2, 60, 60); // draw second circle
    fill(255, 0, 0); // set color for third circle
    ellipse(x2, y2, 40, 40); // draw third circle
    fill(255, 255, 255); // set color for fourth circle
    ellipse(x2, y2, 30, 30); // draw fourth circle
    fill(0, 128, 0); // set color for center circle
    ellipse(x2, y2, 10, 10); // draw center circle

    x2 += vel2; // This takes the X position of the target and moves it to the right at a set speed
    dart.n += vel; // This takes the Y coordinates of the dart and makes it shoot out straight up.

    if (dart.n < 250) { // When the shot misses the target and reaches the "ceiling" resets to the starting position.
      vel = 0; // Its' starting position is still because velocity = 0.
      dart.n = 600; // Its' Y position is at 600 because that is where it sits when it resets.
      missedCount++; // Increment the missed count
      if (missedCount >= maxMisses) { // Check if the player has missed too many times
        isGameOver = true;
        console.log("Game Over");
      }
    }

    if (x2 > width) x2 = 20; // This resets the target position every time it passes the screen and/or when you hit the target.

    if (dist(dart.a, dart.n, x2, y2) < 45) { // Distance between shot and target must be greater than 45
      console.log("Hit!");
      x2 = 20; // This is when the "collision" happens. When the target and the dart touch, it will add a point to your scoreboard and your position will restart.
      dart.n = 600; // The target's Y value is always 600.
      vel = 0;
      score++;
      console.log("Score: " + score);
      missedCount = 0; // Reset missed count on successful hit
      if (score >= winningScore) { // Check if the player has reached the winning score
        console.log("You Win!");
        hasWon = true;
      }
    }
  }
}

function keyPressed() {
  if (isGameOver || hasWon) {
    // Reset game state when any key is pressed after game over or win
    score = 0;
    missedCount = 0;
    isGameOver = false;
    hasWon = false;
    startScreen = true;
    console.log("Game Restarted");
  } else {
    vel = -5;
  }
}

function mousePressed() {
  // when the mouse is pressed, change from start screen to main sketch
  if (startScreen) {
    startScreen = false;
    console.log("Game Started");
  }
}