let width = 15;
let height = 20;
let quiltBase = [];
let hexWidth = 35;
let hexHeight = (hexWidth/Math.sqrt(3))*2;
let rowHeight = (hexHeight*0.75);
let a = hexWidth/2; //from side edge to center line
let b = (hexHeight/4); //height difference from side vertex to center vertex
let faceHexWidth = hexWidth*0.75;
let faceHexHeight = (faceHexWidth/Math.sqrt(3))*2;
let faceHexSpacing = hexWidth-faceHexWidth; //space from edge of one face hexagon to the next
let c = (hexHeight-faceHexHeight)/2;
let d = (faceHexWidth/2); //from side edge to center line of face hexagon
let e = (faceHexHeight/4); //space from outer hexagon vertex to inner hexagon vertex
let quiltFace = [];
let colorIndicatorSize = hexWidth*2;
let colors = 12;
let currentColor = [0, 0, 100];
let previousColor = [];
//color palette of selected colors
let colorPalette = [
  [
	  [0,100,100],[25,95,100],[55,100,100],[120,100,50],[200,60,100],[240,100,100],[245,75,70],[275,100,80],[335,80,90],[20,55,40],[0,0,0],[0,0,35]
  ],
	[
    [350,100,55],[40,95,100],[75,90,90],[120,100,25],[180,100,60],[240,100,40],[265,50,100],[300,100,70],[330,40,100],[25,40,100],[0,0,100],[0,0,75]
  ]
];
let buttonWidth=((colors*hexWidth)/2);
let buttonHeight=hexWidth;
let buttonRadius=10;
let spacing = buttonHeight*1.5;
let y=((colorPalette.length*buttonHeight) + buttonHeight+spacing);

//generates and fill array grid to supply p5 with x,y and hsb
// for position and size of base hexagons
for (i = 0; i < height; i++) {
    across = [];
    if (i%2 === 0) {
        x=hexWidth/2;
        for (j = 0; j < width; j++) {
        across.push([x, y, currentColor]);
        x=x+hexWidth;
    }
    }
    else {
        x=hexWidth;
        for (j = 0; j < width; j++) {
        across.push([x, y, currentColor]);
        x=x+hexWidth;
    }
    }

    quiltBase.push(across);
    y = y + rowHeight;
}

y = ((colorPalette.length*buttonHeight) + buttonHeight+spacing)+c;
//generates and fill array grid to supply p5 with x,y and hsb 
// for position and size of face hexagons
for (i = 0; i < height; i++) {

    across = [];
    if (i%2 === 0) {
        x=hexWidth/2;
    }
    else {
        x=hexWidth;
    }
    for (j = 0; j < width; j++) {
        across.push([x, y, currentColor]);
        x=x+faceHexWidth+faceHexSpacing;
    }
    quiltFace.push(across);
    y += rowHeight;
}
console.log(quiltFace);

//generates and fills array grid to supply p5 with previous color of each square for undo
for (i = 0; i < height; i++) {
  across = [];
  for (j = 0; j < width; j++) {
    across.push(currentColor);
  }
  previousColor.push(across);
}

function setup(){
    //Set canvas to quilt width by quilt height + colorpalette + buffer
    createCanvas(hexWidth * width, (rowHeight * height) + (colorPalette.length*buttonHeight)+(buttonHeight*3));
    colorMode(HSB);
    background(0, 0, 100);

    // draw color palette
    stroke(0,0,15);
    for (i = 0; i < colors; i++) {
        push();
        fill(colorPalette[0][i]);
        square(hexWidth * i, 0, hexWidth, 5);
        pop();
    }
    for (i = 0; i < colors; i++) {
        push();
        fill(colorPalette[1][i]);
        square(hexWidth * i, hexWidth, hexWidth, 5);
        pop();
    }
    x=0;
    rect(x,(hexWidth*colorPalette.length),buttonWidth,buttonHeight,buttonRadius);
    textSize(16);
    textAlign(CENTER,CENTER);
    text('UNDO',x,(hexWidth*colorPalette.length),buttonWidth,buttonHeight);
    rect(buttonWidth,(hexWidth*colorPalette.length),buttonWidth,buttonHeight,buttonRadius);
    text('SAVE',buttonWidth,(hexWidth*colorPalette.length),buttonWidth,buttonHeight);
    textSize(14);
    text('Click to change the color of the face hexagon, Control-Click to change the color of the back (outline) hexagon', 0, (hexWidth*3), colors*hexWidth, hexHeight);
}

function draw(){
    push();
    fill(currentColor);
    square(hexWidth*colors,0,colorIndicatorSize,10);
    pop();


    //draw quilt grid based on quilt array data
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
            push();
            fill(quiltBase[i][j][2]);
            beginShape();
                vertex(quiltBase[i][j][0],quiltBase[i][j][1]);
                vertex(quiltBase[i][j][0]+a,quiltBase[i][j][1]+b);
                vertex(quiltBase[i][j][0]+a,quiltBase[i][j][1]+(rowHeight));
                vertex(quiltBase[i][j][0],quiltBase[i][j][1]+hexHeight);
                vertex(quiltBase[i][j][0]-a,quiltBase[i][j][1]+rowHeight);
                vertex(quiltBase[i][j][0]-a,quiltBase[i][j][1]+b);
                vertex(quiltBase[i][j][0],quiltBase[i][j][1]);
            endShape();
            pop();
        }
    }
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
            push();
            fill(quiltFace[i][j][2]);
            beginShape();
                vertex(quiltFace[i][j][0],quiltFace[i][j][1]);
                vertex(quiltFace[i][j][0]+d,quiltFace[i][j][1]+e);
                vertex(quiltFace[i][j][0]+d,quiltFace[i][j][1]+faceHexHeight*0.75);
                vertex(quiltFace[i][j][0],quiltFace[i][j][1]+faceHexHeight);
                vertex(quiltFace[i][j][0]-d,quiltFace[i][j][1]+faceHexHeight*0.75);
                vertex(quiltFace[i][j][0]-d,quiltFace[i][j][1]+e);
                vertex(quiltFace[i][j][0],quiltFace[i][j][1]);
            endShape();
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
    if (mouseY < (buttonHeight*colorPalette.length)) {
        let colorRow = Math.floor(mouseX / buttonHeight);
        let colorColumn = Math.floor(mouseY / buttonHeight);
        currentColor = colorPalette[colorColumn][colorRow];
    }
    //an undo button sets the last clicked square to its previous color
    else if (mouseX < (buttonWidth) && mouseY<(buttonHeight*colorPalette.length + buttonHeight)){
        quiltBase[lastClickedRow][lastClickedColumn][2]=previousColor[column][row];
    }
    else if (mouseX < (buttonWidth*2) && mouseY<(buttonHeight*colorPalette.length + buttonHeight)){
        saveCanvas();
    }
    // clicking within the quilt grid pushes the existing square's color to previous colors, then updates the selected square to the current color
    // ctrl+click changes the back layer hexagons
    else if (mouseX < (hexWidth*width) && mouseY > ((colorPalette.length*buttonHeight) + buttonHeight+spacing)) {
        if (keyIsDown(17)){
            row = Math.floor((mouseY - ((colorPalette.length*buttonHeight) + buttonHeight+spacing)) / rowHeight);
                if(row%2===0){
                    column = Math.floor(mouseX / hexWidth);
                }
                else {
                    column = Math.floor((mouseX - hexWidth/2)/hexWidth);
                }
                previousColor[row][column] = quiltBase[row][column][2];
                quiltBase[row][column][2] = currentColor;
                lastClickedColumn = column;
                lastClickedRow = row;
        }
        else {
            row = Math.floor((mouseY - ((colorPalette.length*buttonHeight) + buttonHeight+spacing)) / rowHeight);
                if(row%2===0){
                    column = Math.floor(mouseX / hexWidth);
                }
                else {
                    column = Math.floor((mouseX - hexWidth/2)/hexWidth);
                }
                previousColor[row][column] = quiltFace[row][column][2];
                quiltFace[row][column][2] = currentColor;
                lastClickedColumn = column;
                lastClickedRow = row;
        }
    }
}