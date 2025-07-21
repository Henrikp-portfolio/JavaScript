/*
    Paste the code for your week 5 exercise below.

    Week 5 is fun and lets you be interactive - have some fun and make something entertaining
    that brings together all the things you have learned so far.
*/

let canvasWidth = 500;
let canvsHeight = canvasWidth;
mouseIsActive = false;

let myEmoji = {
  size: 300,
  emojiColour1: "#FFF138",
  emojiColour2: "#F47015",
  eyeColour: "white",
  pupilColour: "black",
  mouth: "black",
  teeth: "white",
  eyebrows: "black",
  message1: "CLICK ME!",
  message2: "OUCH!",
};

let x = canvasWidth / 2 - 45;
let y = canvsHeight / 2 + 35;

function setup() {}

function draw() {
  createCanvas(canvasWidth, canvsHeight);
  if (mouseIsActive == false) {
    background(255, 255, 255);
  } else {
    background(200, 200, 200);
  }

  emoji();
  speechBubble();
  speech();
}

function emoji() {
  // If mouse is clicked on emoji, emoji colour changes
  if (mouseIsActive == false) {
    fill(myEmoji.emojiColour1); // Emoji colour to yellow
    circle(x, y, myEmoji.size); // Emoji face
  } else {
    fill(myEmoji.emojiColour2); // Emoji colour to orange
    circle(x, y, myEmoji.size); // Emoji face
  }

  // Creating the 2 different faces of the emoji
  // When mouse is clicked on the emoji, the face changes
  if (mouseIsActive == false) {
    // Happy emoji eyes
    push();
    fill(myEmoji.eyeColour); // Eye colour from myEmoji object - white
    ellipse(x - 45, y - 50, 55, 85); // Left eye
    ellipse(x + 45, y - 50, 55, 85); // Right eye
    fill(myEmoji.pupilColour); // Pupil colour from myEmoji object - black
    circle(x - 45, y - 45, 30); // Left pupil
    circle(x + 45, y - 45, 30); // Right pupil
    pop();

    // Happy emoji mouth
    push();
    fill(myEmoji.mouth); // Colour from myEmoji object - black
    stroke(3);
    beginShape(); // Empty part of mouth
    vertex(x - 100, y + 20);
    bezierVertex(x - 45, y + 40, x + 45, y + 40, x + 100, y + 20);
    bezierVertex(x + 75, y + 140, x - 75, y + 140, x - 100, y + 20);
    endShape();
    pop();

    // Happy emoji teeth
    push();
    fill(myEmoji.teeth);
    beginShape();
    vertex(x - 97, y + 24);
    bezierVertex(x - 45, y + 42, x + 45, y + 42, x + 97, y + 24); // top of teeth
    bezierVertex(x + 97, y + 24, x + 94, y + 37, x + 88, y + 49); // curve on right side of teeth
    bezierVertex(x + 45, y + 70, x - 45, y + 70, x - 88, y + 49); // bottom of teeth
    bezierVertex(x - 88, y + 49, x - 94, y + 37, x - 97, y + 24); // curve on left side of teeth
    vertex(x - 97, y + 24);
    endShape();
    pop();
  } else {
    // Angry emoji eyes
    push();
    fill(myEmoji.eyeColour); // Eye colour from myEmoji object - white
    ellipse(x - 40, y - 5, 55, 70); // Left eye
    ellipse(x + 40, y - 5, 55, 70); // Right eye
    fill(myEmoji.pupilColour); // Pupil colour from myEmoji object - black
    circle(x - 40, y, 25); // Left pupil
    circle(x + 40, y, 25); // Right pupil
    pop();

    // Angry emoji mouth
    push();
    fill(myEmoji.mouth); // Colour from myEmoji object - black
    stroke(3);
    beginShape(); // Closed mouth
    vertex(x - 40, y + 95);
    bezierVertex(x - 15, y + 45, x + 15, y + 45, x + 40, y + 95);
    bezierVertex(x + 10, y + 80, x - 10, y + 80, x - 40, y + 95);
    endShape();

    // Angry emoji eyebrows
    // Left angry emoji eyebrow
    push();
    fill(myEmoji.eyebrows);
    beginShape();
    vertex(x - 70, y - 60);
    bezierVertex(x - 65, y - 72, x - 30, y - 65, x - 10, y - 40); // Top of eyebrow
    bezierVertex(x - 7, y - 37, x - 11, y - 35, x - 15, y - 36); // Right curve of eveybrow
    bezierVertex(x - 20, y - 45, x - 40, y - 55, x - 65, y - 56); // Bottom of eyebrow
    bezierVertex(x - 69, y - 56, x - 71, y - 58, x - 70, y - 60); // Left curve of eveybrow
    endShape();
    pop(); // End left eyebrow

    // Right angry emoji eyebrow
    push();
    fill(myEmoji.eyebrows);
    beginShape();
    vertex(x + 70, y - 60);
    bezierVertex(x + 65, y - 72, x + 30, y - 65, x + 10, y - 40); // Top of eyebrow
    bezierVertex(x + 7, y - 37, x + 11, y - 35, x + 15, y - 36); // Right curve of eveybrow
    bezierVertex(x + 20, y - 45, x + 40, y - 55, x + 65, y - 56); // Bottom of eyebrow
    bezierVertex(x + 69, y - 56, x + 71, y - 58, x + 70, y - 60); // Left curve of eveybrow
    endShape();
    pop(); // End right eyebrow

    // Wider eyebrows
    //     // Angry emoji eyebrows
    //     // Left angry emoji eyebrow
    //     push()
    //     fill(myEmoji.eyebrows);
    //     beginShape();
    //     vertex(x-80, y-60);
    //     bezierVertex(x-75, y-72, x-35, y-65, x-10, y-40);
    //     bezierVertex(x-7, y-37, x-11, y-35, x-15, y-36);
    //     bezierVertex(x-35, y-55, x-65, y-60, x-75, y-56);
    //     bezierVertex(x-79, y-56, x-81, y-58, x-80, y-60);
    //     endShape();
    //     pop();

    //     // Right angry emoji eyebrow
    //     push()
    //     fill(myEmoji.eyebrows);
    //     beginShape();
    //     vertex(x+80, y-60);
    //     bezierVertex(x+75, y-72, x+35, y-65, x+10, y-40);
    //     bezierVertex(x+7, y-37, x+11, y-35, x+15, y-36);
    //     bezierVertex(x+35, y-55, x+65, y-60, x+75, y-56);
    //     bezierVertex(x+79, y-56, x+81, y-58, x+80, y-60);
    //     endShape();
    //     pop();
  }
}

function speechBubble() {
  fill("white"); // Creating the speech bubble
  beginShape();
  vertex(x + 130, y - 150);
  vertex(x + 50, y - 150);
  bezierVertex(x, y - 150, x, y - 220, x + 50, y - 220);
  vertex(x + 200, y - 220);
  bezierVertex(x + 250, y - 220, x + 250, y - 150, x + 200, y - 150);
  vertex(x + 160, y - 150);
  vertex(x + 125, y - 90);
  endShape(CLOSE); // End speech bubble
}

function speech() {
  // If mouse is clicked on emoji, the text, size of text and position of text changes
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  if (mouseIsActive == false) {
    textSize(30);
    text(myEmoji.message1, x + 125, y - 185);
  } else {
    textSize(40);
    text(myEmoji.message2, x + 125, y - 184);
  }
}

function mousePressed() {
  if (
    mouseX >= x - 150 &&
    mouseX <= x + 150 &&
    mouseY >= y - 150 &&
    mouseY <= y + 150
  ) {
    mouseIsActive = true;
  }
}

function mouseReleased() {
  mouseIsActive = false;
}
