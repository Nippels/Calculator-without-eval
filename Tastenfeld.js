// Modular Tastenfeld v 0.01
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let t;
let x;
let y;
let s;
let f;

class Button{
  
  constructor(t, x, y, s, f){
    this.t = t;   
    this.x = x;
    this.y = y;
    this.s = s;
    this.f = f;
  
  }
  update(){
  if (
    mouseX > this.x && 
    mouseX < this.x + this.s &&
    mouseY > this.y &&
    mouseY < this.y + this.s
  ) {
    overBox = true;
    if (!locked) {
    stroke(250);
    fill(220);
    textSize(75) 

    }
  } else {
    overBox = false;
  }
    if (locked|!overBox) {
    stroke(156);
    fill(200)
    textSize(73)  

  } 
 
  this.clicked = function(){
 if (overBox&&locked){
  console.log(eval(this.f))
   locked = false
 
 }
} 
    
  }
  show(){
  strokeWeight(2);
  rect(this.x, this.y, this.s, this.s,10);
  noStroke();
         
  fill(100)
  textAlign(CENTER) 
  text(this.t,this.x+37,this.y+65)
  }

}

   function mousePressed() {
  locked = true
}
function mouseReleased() {
  locked = false;
}

function drawInterface(){
    for(let i = 0; i<Tastenfeld.length;i++){
  Tastenfeld[i].update();
  Tastenfeld[i].show();
  Tastenfeld[i].clicked();
  }  
}
 

