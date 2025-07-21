/*
    Paste the code for your week 3 exercise below.

    The week 3 exercise is about basic functions, using variables and 
    commenting your code.  Make you you demonstrate the week 3 exercise 
    components with original code to obtain good marks!
*/

/*
  Module 3 - Drawing a simple logo using JavaScript
  Goal: demonstrate use of variables, functions and comments
*/

function setup() {
  let cWidth = 500;
  let cHeight = cWidth;
  let cWidthHalf = cWidth / 2;
  let cHeightHalf = cHeight / 2;
  createCanvas(cWidth, cHeight);
  let greenColour = color("#58B244");
  let arrowColour = color("white"); // Set the arrow colour to white
  let circle1 = 300;
  let circle2 = 250;
  let x = 50; // Adjust the size of the arrow heads
  let y = x; // Copying the x axis keeps all the arrow heads the same size
  let stemFromEdge = (cWidth - x * 4) * (1 / 3); // Make stems one third of the width of the white triangle bases
  let stemAxis = cWidthHalf - stemFromEdge / 2; // Put stems in the middle of edges of canvas and arrows

  background(greenColour); // Set the background colour to a nice green

  noStroke();
  backgroundCircles(
    cWidthHalf,
    cHeightHalf,
    circle1,
    circle2,
    arrowColour,
    greenColour
  );
  arrowStems(
    stemAxis,
    stemFromEdge,
    x,
    y,
    arrowColour,
    cWidthHalf,
    cHeightHalf,
    cWidth,
    cHeight
  );
  arrowTips(x, y, arrowColour, cWidthHalf, cHeightHalf, cWidth, cHeight);

  // centre(cWidthHalf, cHeightHalf, cWidth, cHeight); // Find the centre of the page to help scale the arrows
}

function arrowTips(
  x,
  y,
  arrowColour,
  cWidthHalf,
  cHeightHalf,
  cWidth,
  cHeight
) {
  fill(arrowColour); // Make the arrow white
  triangle(cWidthHalf, cHeightHalf - y, x * 2, y, cWidth - x * 2, y); // Top triangle
  triangle(
    cWidthHalf + x,
    cHeightHalf,
    cWidth - x,
    y * 2,
    cWidth - x,
    cHeight - y * 2
  ); // Right triangle
  triangle(
    cWidthHalf,
    cHeightHalf + y,
    x * 2,
    cHeight - y,
    cWidth - x * 2,
    cHeight - y
  ); // bottom triangle
  triangle(cWidthHalf - x, cHeightHalf, x, cHeight - y * 2, x, y * 2); // Left triangle
  /*
    Adjust the x and y axis to make all the arrows come out evenly 
    from the sides and make them come out evenly from the centre
  */
}

function arrowStems(
  stemAxis,
  stemFromEdge,
  x,
  y,
  arrowColour,
  cWidthHalf,
  cHeightHalf,
  cWidth,
  cHeight
) {
  fill(arrowColour); // Make the stems of the arrow the same as the arrow colour
  rect(stemAxis, 0, stemFromEdge, y); // Top stem
  rect(cWidth - x, stemAxis, x, stemFromEdge); // Right stem
  rect(stemAxis, cHeight - y, stemFromEdge, y); // bottom stem
  rect(0, stemAxis, x, stemFromEdge); // Left stem
}

function backgroundCircles(x, y, circle1, circle2, arrowColour, greenColour) {
  fill(arrowColour); // Make first circle same colour as arrows
  circle(x, y, circle1);
  fill(greenColour); // Make second circle same colour as background
  circle(x, y, circle2);
}

function centre(cWidthHalf, cHeightHalf, cWidth, cHeight) {
  stroke(1);
  line(0, cHeightHalf, cWidth, cHeightHalf);
  line(cWidthHalf, 0, cWidthHalf, cHeight);
  line(0, 0, cWidth, cHeight);
  line(cWidth, 0, 0, cHeight);
}
