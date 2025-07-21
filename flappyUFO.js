let canvasW = 600;
let canvasH = 300;

function setup() {
  createCanvas(600, 300);
  background(255, 255, 255);
	canvasW = width;
	canvasH = height;
  textSize(20);
  textStyle(NORMAL);
  textAlign(CENTER, CENTER);
}
function scenery() {
  push();
  noStroke();

  // Sky
  fill("lightblue");
  rect(0, 0, width, height);

  // Ground
  fill("green");
  rect(0, height-50, width, 50);
  pop();
}


startIsClicked = false;
gameIsRunning = false;
restartIsClicked = true;

let ufoW = 90;
let ufoH = 30;
let ufoX = 100;
let ufoYRestart = 100;
let ufoY = ufoYRestart;

let velocityRestart = 1.5;
let velocity = velocityRestart;
let acceleration = 0.15;

let barnW = 100;
let barnH = 75;
let barnRestartX = canvasW + 1;
let barnX = barnRestartX;
let barnY = 200;

let gameOverTextY = 30;
let gameOverReason = "";
let buttonW = 180;
let buttonH = 50;


function ufo(x, y) {
  push();
  translate(x, y);
  
  // Body
  fill(255, 0, 0);
  ellipse(0, 0, ufoW, ufoH);
  
  // Glass dome
  fill(255, 255, 255, 225);
  beginShape();
  vertex(-30, 0);
  bezierVertex(-20, -40, 20, -40, 30, 0);
  bezierVertex(15, 8, -15, 8, -30, 0);
  endShape(CLOSE);
  pop();
}

function barn(x, y) {
  push();
  translate(x, y);
  fill(150, 30, 0);
  rect(0, 0, barnW, barnH);
  pop();
}

function button(x, y, w, h) {
  push();
  translate(x, y);

  // Restart button
  if (!restartIsClicked) {
    fill(255, 0, 0);
    rect(-(buttonW/2), 0, w, h, 10);
    
    fill(255, 255, 255);
    textStyle(BOLD);
    text("Restart", 0, buttonH/2);
  }
  // Start button
  else {
    fill(170, 255, 130);
    rect(-(buttonW/2), 0, w, h, 10);

    fill(0, 0, 0);
    textStyle(BOLD);
    text("Start", 0, buttonH/2);
  }
  pop();
}

function mouseClicked() {
  if (
    mouseX > (width/2 - buttonW/2) && 
    mouseX < (width/2 + buttonW/2) && 
    mouseY > (height/2) && 
    mouseY < (height/2 + buttonH)
  ) {
    if (!startIsClicked && !gameIsRunning && restartIsClicked) {
      startIsClicked = true;
    }
    else if (!startIsClicked && !gameIsRunning && !restartIsClicked) {
      restartIsClicked = true;
    }
  }
}

function draw() {
  scenery();
  barn(barnX, barnY);
  ufo(ufoX, ufoY);

  if (gameIsRunning) {
    startIsClicked = false;
    restartIsClicked = false;

    ufoY += velocity;
    velocity += acceleration;
    ufoY = constrain(ufoY, ufoH, height - ufoH);  // Constrains ufoY to the top of the canvas

    barnX -= 3;
    if (barnX < -barnW) {
      barnX = barnRestartX;
    }

    if (ufoY <= ufoH) {
      velocity = 0;
      velocity += acceleration;
    }
    else if (ufoY > ufoH && (ufoY + ufoH/4 < height - 50)) {
      if ((mouseIsPressed || (keyIsPressed && key === " "))) {
        if (velocity > 0) {
          velocity -= (acceleration * 4.5);
        }
        else {
          velocity -= (acceleration * 2.5);
        }
      }

      if (
        ufoX + ufoW/2 >= barnX && 
        ufoX - ufoW/2 <= barnX + barnW && 
        ufoY + ufoH/2 >= barnY && 
        ufoY - ufoH/2 <= barnY + barnH
      ) {
        gameIsRunning = false;
        gameOverReason = "You flew into a barn.";
      }
    }
    // Collision detection with ground
    else if (ufoY + ufoH/4 >= height - 50) {
      gameIsRunning = false;
      gameOverReason = "You crash landed into the ground.";
    }
  } 
  else {
    if (!restartIsClicked) {
      fill(0, 0, 0);
      text(`Game Over!\n${gameOverReason}`, width/2, height/2 - gameOverTextY);
    }
    
    button(width/2, height/2, buttonW, buttonH);
    
    if (restartIsClicked) {
      ufoY = ufoYRestart;
      barnX = barnRestartX;
      velocity = velocityRestart;
    }
    if (startIsClicked) {
      gameIsRunning = true;
    }
  }
}
