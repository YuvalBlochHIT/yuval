let timeRemaining = 15;
let squareColor;
let rectWidth = 700;
let rectHeight = 100;
let rectGrowing = true;
let timerStarted = false;

function preload() {
  beachImg = loadImage('beach.jpg');
}

function setup() {
  createCanvas(700, 600);
  squareColor = color(255); // white
  noStroke();
}

function draw() {
  // Draw the background image
  background(beachImg);

  
  // Grow and shrink the rectangle
  if (rectGrowing) {
    rectHeight += 0.5;
    if (rectHeight >= 150) {
      rectGrowing = false;
    }
  } else {
    rectHeight -= 0.5;
    if (rectHeight <= 100) {
      rectGrowing = true;
    }
  }

  if (timerStarted) {
    let t = timeRemaining / 15;
    if (squareColor == color(255)) {
      squareColor = lerpColor(color(255), color(255, 0, 0), t); // white to red
    } else {
      squareColor = lerpColor(color(255, 0, 0), color(255), t); // red to white
    }
    
    // Display the timer
    fill(255, 0, 0);
    textSize(30);
    textAlign(CENTER);
    text(round(timeRemaining), width / 2, height - 60);

    timeRemaining = max(timeRemaining - 1 / 60, 0);
  }

  // Draw the growing/shrinking rectangle
  fill(59,216,224);
  rect(0, 0, rectWidth, rectHeight);

  // Draw the circle
  fill(squareColor);
  ellipse(width / 2, height / 2 - 75, 60, 60);

  // Draw the square
  fill(squareColor);
  rect(width / 2 - 40, height / 2 - 50, 80, 120);

  // Draw the bottom rectangles
  rect(width / 2 - 40, height / 2 + 40, 30, 90);
  rect(width / 2 + 10, height / 2 + 40, 30, 90);
  rect(width / 2 + 30, height / 2 - 50, 20, 100);
  rect(width / 2 - 50, height / 2 - 50, 20, 100);
  
  // Draw the swimsuite
  fill(59,216,224);
  rect(width / 2 - 40, height / 2 + 40, 30, 40);
  rect(width / 2 + 10, height / 2 + 40, 30, 40);
  rect(width / 2 - 40, height / 2 + 40, 70, 30);
  
  //TIMER
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(20,190,224);
  text("Click to Start", width/2, height/2-252);
}

function mouseClicked() {
  if (!timerStarted) {
    timerStarted = true;
  }
}
