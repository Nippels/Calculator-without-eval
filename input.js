let swOff;      //prevents stuff like ++,...
let dotOff = 0; //prevents more then one dot per number
let test;       //callback for prevent()
let keyEv;      //Keyboard parser 
let a = false;
// if "a" switches to true, Start "0" gets deleted
function swsS(){    
  a = true
}
// exception if entry Starts with 0. 
function swsS0(){      
  a = undefined
}
// if false the Start Screen is 0
function startScreen(){  
  if(a == false){
    inp = "0"
  }else if(a == true){
    inp -= "0"
  }
}
//prevents stuff like ++,...
function prevent(test){  
    if(swOff == false){
  cal.push(inp);
  inp = test;
  sub();
  seq();
  dotOff = 0;  
  }
}
//Creates Calculator functions:
//submit "="
function sub(){
    cal.push(inp);
    disp = cal.join("");
    inp = "";
    seq();
    dotOff = 0;
  console.log(cal)
}
// basic operations
function Mult(){prevent("*")}
function Div(){prevent("/")}
function Add(){prevent("+")}
function Subs(){
  cal.push(inp);
  inp = "-"; 
  sub(); 
  swOff = true; 
  dotOff = 0; 
}
// "c" clear
function Clear(){               
  disp = "";
  inp = "";
  cal = [];
  swOff = true;
  a = false;
  dotOff = 0;
}
//"."
function Dot(){dotOff += 1; 
  swsS0()
  if(dotOff <=1 ){inp += "."}
}
//root
function Sqrt(){
  inp = (Math.sqrt(inp));
}
//pow
function Pow(){
  inp = (Math.pow(inp,2));
}
//pi
function Pi(){
    swOff = false;
    swsS();
  inp += "3.14159";
}
//log
function Log(){
  inp = (Math.log(inp)); 
}
//Numbers
function sub1(){swsS(); inp += ("1"); swOff = false;}
function sub2(){swsS(); inp += ("2"); swOff = false;}
function sub3(){swsS(); inp += ("3"); swOff = false;}
function sub4(){swsS(); inp += ("4"); swOff = false;}
function sub5(){swsS(); inp += ("5"); swOff = false;}
function sub6(){swsS(); inp += ("6"); swOff = false;}
function sub7(){swsS(); inp += ("7"); swOff = false;}
function sub8(){swsS(); inp += ("8"); swOff = false;}
function sub9(){swsS(); inp += ("9"); swOff = false;}
function sub0(){swsS(); inp += ("0"); swOff = false;}
//function inPut wraps all input together 
function inPut(){
  x = 25
  y = height-100
  s = 75
  //Creates Number Buttons
  Tastenfeld.push(new Button("0", x, y, s, "sub0()"));  
  Tastenfeld.push(new Button("1", x, y-80, s, "sub1()"))
  Tastenfeld.push(new Button("2", x+80, y-80, s, "sub2()"))
  Tastenfeld.push(new Button("3", x+160, y-80, s, "sub3()"))
  Tastenfeld.push(new Button("4", x, y-160, s, "sub4()"))
  Tastenfeld.push(new Button("5", x+80, y-160, s, "sub5()"))
  Tastenfeld.push(new Button("6", x+160, y-160, s, "sub6()")) 
  Tastenfeld.push(new Button("7", x, y-240, s, "sub7()"))
  Tastenfeld.push(new Button("8", x+80, y-240, s, "sub8()"))
  Tastenfeld.push(new Button("9", x+160, y-240, s, "sub9()")) 
  //Creates Comma Button
  Tastenfeld.push(new Button(".", x+80, y, s, "Dot()"))  
  //Creates Submit Button
  Tastenfeld.push(new Button("=", x+160, y, s, "sub()"))
  //Clear Button an so on..
  Tastenfeld.push(new Button("c", x, y-320, s, "Clear()")) 
  //Operations
  Tastenfeld.push(new Button("*", x+270, y-240, s, "Mult()")) 
  Tastenfeld.push(new Button("/", x+270, y-160, s, "Div()"))
  Tastenfeld.push(new Button("+", x+270, y, s, "Add()"))
  Tastenfeld.push(new Button("-", x+270, y-80, s, "Subs()"))
  //Special
  Tastenfeld.push(new Button("Rt", x+90, y-320, s, "Sqrt()"))//√ checkt
  Tastenfeld.push(new Button("pi", x+180, y-320, s, "Pi()"))//π font
  Tastenfeld.push(new Button("L", x+270, y-320, s, "Log()"))
}
//Keyboardlistener
document.addEventListener("keypress", function (keyEv) {
//Comma
	if ([44, 46].includes(keyEv.charCode)) {Dot();}
//Numbers
	if ([48].includes(keyEv.charCode)) {sub0()}
	if ([49].includes(keyEv.charCode)) {sub1()}
  	if ([50].includes(keyEv.charCode)) {sub2()}
  	if ([51].includes(keyEv.charCode)) {sub3()}
  	if ([52].includes(keyEv.charCode)) {sub4()}
  	if ([53].includes(keyEv.charCode)) {sub5()}
  	if ([54].includes(keyEv.charCode)) {sub6()}
  	if ([55].includes(keyEv.charCode)) {sub7()}
  	if ([56].includes(keyEv.charCode)) {sub8()}
    if ([57].includes(keyEv.charCode)) {sub9()}
// operators
  	if ([42].includes(keyEv.charCode)) {Mult()}
  	if ([43].includes(keyEv.charCode)) {Add()}
  	if ([45].includes(keyEv.charCode)) {Subs()}
  	if ([47].includes(keyEv.charCode)) {Div()}
//Enter/result
	if (keyEv.charCode == 61) {sub()}
// clear
	if ([67, 99].includes(keyEv.charCode)) {Clear()}

// logarithm  L, l
	if ([76, 108].includes(keyEv.charCode)) {Log()}
// root R, r
	if ([82, 114].includes(keyEv.charCode)) {Sqrt()}
// square S, s
	if ([83, 115].includes(keyEv.charCode)) {Pow()}
// pi P, p
	if ([80,112].includes(keyEv.charCode)) {Pi()}
	// additional clear and result keys
	switch (keyEv.code) {
		// <delete> and <backspace> to clear display
		case "Backspace":
		case "Delete":
			Clear();
		break;

		// both <enter> keys to display result
		case "Enter":
		case "NumpadEnter":
			sub();
		break;
	}
});