let dispFont;
let cal = [];
let disp = []
let inp = "";
let Tastenfeld = [];

//function preload() {
//  dispFont = loadFont('digital-7.ttf')
//}

function setup() {
  createCanvas(400, 600); 
  inPut()

}

function draw(){
  background(120)//,110,190);
  fill(20);
  stroke(80);
  rect(25, 25, 350, 120, 10);
  noStroke();
  textSize(42);
 // textFont(dispFont);   //changes font Style. Font must be preloaded. there is an issue due cross origin policies in firefox
  textAlign(LEFT); 
  fill("Green")
  startScreen();
  displayCalc = text(disp ,50, 75);
  displayInput = text(inp ,50, 125);
  drawInterface()

}


