let quilt = [];
let width = 15;
let height = 20;
let size = 30;
let x = 0;
let spacing = 15;
let colors = 12;
let currentColor = [0, 0, 100];
let previousColor = [];
let colorIndicatorSize = size*2;
//color palette of selected colors
let colorPalette = [
  [
	  [0,100,100],[25,95,100],[55,100,100],[120,100,50],[200,60,100],[240,100,100],[245,75,70],[275,100,80],[335,80,90],[20,55,40],[0,0,0],[0,0,35]
  ],
	[
    [350,100,55],[40,95,100],[75,90,90],[120,100,25],[180,100,60],[240,100,40],[265,50,100],[300,100,70],[330,40,100],[25,40,100],[0,0,100],[0,0,75]
  ]
];
let buttonWidth=((colors*size)/2);
let buttonHeight=size;
let buttonRadius=10;

//generates array grid to supply p5 with x,y and hsb for position and size of squares
for (i = 0; i < width; i++) {
  down = [];
  y = ((colorPalette.length*size) + size + spacing);
  for (j = 0; j < height; j++) {
    down.push([x, y, currentColor]);
    y = y + size;
  }
  quilt.push(down);
  x = x + size;
}

//generates array grid to supply p5 with previous color of each square for undo
for (i = 0; i < width; i++) {
  down = [];
  for (j = 0; j < height; j++) {
    down.push(currentColor);
  }
  previousColor.push(down);
}

function setup() {
  //Set canvas to quilt width by quilt height + colorpalette + buffer
  if((size*width)<((size*colors)+(colorIndicatorSize))){
    createCanvas(((size*colors)+(size*2)),(size * height) + (size * 4));
  }
    else{
  createCanvas(size * width, (size * height) + (size * colorPalette.length)+size+spacing);
  }
  colorMode(HSB);
  background(0, 0, 100);

  // draw color palette
  stroke(0,0,15);
  for (i = 0; i < colors; i++) {
    push();
    fill(colorPalette[0][i]);
    square(size * i, 0, size, 5);
    pop();
  }
  for (i = 0; i < colors; i++) {
    push();
    fill(colorPalette[1][i]);
    square(size * i, size, size, 5);
    pop();
  }
  x=0;
  rect(x,(size*colorPalette.length),buttonWidth,buttonHeight,buttonRadius);
  textSize(20);
  textAlign(CENTER,CENTER);
  text('UNDO',x,(size*colorPalette.length),buttonWidth,buttonHeight);
  rect(buttonWidth,(size*colorPalette.length),buttonWidth,buttonHeight,buttonRadius);
  text('SAVE',buttonWidth,(size*colorPalette.length),buttonWidth,buttonHeight);
}

function draw() {
  push();
  fill(currentColor);
  square(size*colors,0,colorIndicatorSize,10);
  pop();

  //draw quilt grid based on quilt array data
  for (i = 0; i < width; i++) {
    for (j = 0; j < height; j++) {
      push();
      fill(quilt[i][j][2]);
      square(quilt[i][j][0], quilt[i][j][1], size);
      pop();
    }
  }
}

let column = 0;
let row = 0;
let lastClickedColumn = 0;
let lastClickedRow = 0;

function mouseClicked() {
  //clicking in the palette sets the current color
  if (mouseY < (size*colorPalette.length)) {
    let colorRow = Math.floor(mouseX / size);
    let colorColumn = Math.floor(mouseY / size);
    currentColor = colorPalette[colorColumn][colorRow];
  }
  //an undo button sets the last clicked square to its previous color
  else if (mouseX < (buttonWidth) && mouseY<(size*colorPalette.length + buttonHeight)){
    quilt[lastClickedColumn][lastClickedRow][2]=previousColor[column][row];
  }
  else if (mouseY<(size*colorPalette.length + buttonHeight)){
    saveCanvas();
    }
  // clicking within the quilt grid pushes the existing square's color to previous colors, then updates the selected square to the current color
  else if (mouseX < (size*width) && mouseY >((colorPalette.length*size) + size + spacing)) {
    column = Math.floor(mouseX / size);
    row = Math.floor((mouseY -(((colorPalette.length*size) + size + spacing))) / size);
    previousColor[column][row] = quilt[column][row][2];
    quilt[column][row][2] = currentColor;
    lastClickedColumn = column;
    lastClickedRow = row;
    }
}

function keyPressed() {
  if (keyIsDown(17) && keyIsDown(90)) {
    quilt[lastClickedColumn][lastClickedRow][2]=previousColor[column][row];
  }
  if (keyIsDown(17) && keyIsDown(83)) {
    saveCanvas();
  }
}