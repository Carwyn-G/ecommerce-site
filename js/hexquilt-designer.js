let quiltSize = getSizeFromPage();

let width = quiltSize[0];
let oddRowWidth=width-1;
let height = quiltSize[1];
let quiltBase = [];
let hexWidth = 50;
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
let buttonHeight=30;
let buttonWidth=((colors*buttonHeight)/2);
let buttonRadius=10;
let spacing = buttonHeight*1.5;
let colorIndicatorSize = buttonHeight*2;
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
        for (j = 0; j < oddRowWidth; j++) {
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
        for (j = 0; j < width; j++) {
        across.push([x, y, currentColor]);
        x=x+faceHexWidth+faceHexSpacing;
    }
    }
    else {
        x=hexWidth;
        for (j = 0; j < oddRowWidth; j++) {
        across.push([x, y, currentColor]);
        x=x+faceHexWidth+faceHexSpacing;
    }
    }
    quiltFace.push(across);
    y += rowHeight;
}

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
    if ((hexWidth*width)<(buttonHeight*colors + colorIndicatorSize)){
        createCanvas((buttonHeight*colors + colorIndicatorSize), (rowHeight * height) + (colorPalette.length*buttonHeight)+(buttonHeight*3));
    }
    else{
        createCanvas(hexWidth * width, (rowHeight * height) + (colorPalette.length*buttonHeight)+(buttonHeight*3));
    }
    colorMode(HSB);
    background(0, 0, 100);

    // draw color palette
    stroke(0,0,15);
    for (i = 0; i < colors; i++) {
        push();
        fill(colorPalette[0][i]);
        square(buttonHeight * i, 0, buttonHeight, 5);
        pop();
    }
    for (i = 0; i < colors; i++) {
        push();
        fill(colorPalette[1][i]);
        square(buttonHeight * i, buttonHeight, buttonHeight, 5);
        pop();
    }
    x=0;
    rect(x,(buttonHeight*colorPalette.length),buttonWidth,buttonHeight,buttonRadius);
    textSize(16);
    textAlign(CENTER,CENTER);
    text('UNDO',x,(buttonHeight*colorPalette.length),buttonWidth,buttonHeight);
    rect(buttonWidth,(buttonHeight*colorPalette.length),buttonWidth,buttonHeight,buttonRadius);
    text('SAVE',buttonWidth,(buttonHeight*colorPalette.length),buttonWidth,buttonHeight);
    textSize(14);
    text('Click to change the color of the face hexagon, Control-Click to change the color of the back (outline) hexagon', 0, (buttonHeight*3), (colors*buttonHeight+colorIndicatorSize), spacing);
}

function draw(){
    push();
    fill(currentColor);
    square(buttonHeight*colors,0,colorIndicatorSize,10);
    pop();


    //draw quilt grid based on quilt array data
    for (i = 0; i < height; i++) {
        for (j = 0; j < quiltBase[i].length; j++) {
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
        for (j = 0; j < quiltFace[i].length; j++) {
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
let undoBaseLayer = false;

function mouseClicked() {
    //clicking in the palette sets the current color
    if (mouseY < (buttonHeight*colorPalette.length) && mouseX < buttonHeight*colors) {
        let colorRow = Math.floor(mouseX / buttonHeight);
        let colorColumn = Math.floor(mouseY / buttonHeight);
        currentColor = colorPalette[colorColumn][colorRow];
    }
    //an undo button sets the last clicked square to its previous color
    else if (mouseX < (buttonWidth) && mouseY<(buttonHeight*colorPalette.length + buttonHeight)){
        if (undoBaseLayer==true){
            quiltBase[lastClickedRow][lastClickedColumn][2]=previousColor[row][column];
        }
        else{
            quiltFace[lastClickedRow][lastClickedColumn][2]=previousColor[row][column];
        }
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
                undoBaseLayer = true;
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
                undoBaseLayer = false;
        }
    }
}

function getSizeFromPage(){ //Feels like a silly solution but it makes sense to me and the other methods I found when looking up seemed to rely too much on a lot of frameworks I don't know anything about
  let path = window.location.href;
  let shortPath = (path.replace("http://127.0.0.1:5500/hex-designer.html?", ""));
  splitStr = (shortPath.split("&"));
  let quiltWidth = (splitStr[0].replace("width=", ""));
  let quiltHeight = (splitStr[1].replace("height=", ""));
  return [quiltWidth, quiltHeight];
}