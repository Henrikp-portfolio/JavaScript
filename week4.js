/*
    Paste the code for your week 4 exercise below.
*/
// EXERCISE 2
/*
  Create an animation that demonstrates the following:

  1. Use and understanding of arrays
  2. Use and understanding of loops
  3. Use and understanding of conditionals
  
  Don't just duplicate the demo from class - be creative!
*/

let canvasWidth = 500;
let canvasHeight = canvasWidth;
let x = new Array([]);
let y = new Array([]);
let xSpeed = new Array([]); // store xSpeed
let ySpeed = new Array([]); // store ySpeed
let colours = new Array([]); // store random colours
let widthSize = new Array([]); // store random sizes
let heightSize = new Array([]); // store random sizes
let minEllipseSize = 10;
let maxEllipseSize = 45;
let nOfEllipses = 10;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // setting up the ellipses
  for (let i = 0; i < nOfEllipses; i++) {
    widthSize[i] = int(random(minEllipseSize, maxEllipseSize)); // make the ellipses random sizes
    heightSize[i] = int(random(minEllipseSize, maxEllipseSize)); // make the ellipses random sizes
    x[i] = random(widthSize[i] / 2, canvasWidth - widthSize[i] / 2); // initial ellipse position x
    y[i] = random(heightSize[i] / 2, canvasHeight - heightSize[i] / 2); // initial ellipse position y
    xSpeed[i] = int(random(-6, 6)); // ellipses x speed random intiger between -5 and 5
    ySpeed[i] = int(random(-6, 6)); // ellipses y speed random intiger between -5 and 5
    colours[i] = color(random(255), random(255), random(255)); // make the ellipses random colours

    /*if any of the xSpeed or ySpeed values are 0, the while loop will keep randomising
      the numbers from -5 to 5 until it returns an integer above or below 0
    */
    while (xSpeed[i] === 0) {
      xSpeed[i] = int(random(-6, 6));
    }
    while (ySpeed[i] === 0) {
      ySpeed[i] = int(random(-6, 6));
    }
  } // end the for loop
}

function draw() {
  background(220);

  for (let i = 0; i < nOfEllipses; i++) {
    fill(colours[i]); // set colours for the ellipses
    ellipse(x[i], y[i], widthSize[i], heightSize[i]); // draw the ellipses

    x[i] += xSpeed[i]; // updating the position of the ellipses
    y[i] += ySpeed[i]; // updating the position of the ellipses

    // make each ellipse change direction when it touches the edge of the canvas
    // make each ellipse change to a random colour when it hits the edge
    if (x[i] >= canvasWidth - widthSize[i] / 2 || x[i] <= widthSize[i] / 2) {
      xSpeed[i] *= -1;
      colours[i] = color(random(255), random(255), random(255));
    }
    if (y[i] >= canvasHeight - heightSize[i] / 2 || y[i] <= heightSize[i] / 2) {
      ySpeed[i] *= -1;
      colours[i] = color(random(255), random(255), random(255));
    }
  } // end the for loop
}
