//sequential one by one parser

let give;

function seq(){
  if (cal.length>=3){calc(); cal = []}

}

function calc(){
  if(cal[1] == "+"){
  give = Number(cal[0]) + Number(cal[2])
    if(cal.length == 3){   
      disp = disp+"="
      inp = give+""
    }   
  }
    if(cal[1] == "-"){
  give = Number(cal[0]) - Number(cal[2])
    if(cal.length == 3){
      disp = disp+"="
      inp = give+""
    }   
  }
      if(cal[1] == "*"){
  give = Number(cal[0]) * Number(cal[2])
    if(cal.length == 3){
      disp = disp+"="
      inp = give+""
    }   
  }
    if(cal[1] == "/"){
  give = Number(cal[0]) / Number(cal[2])
    if(cal.length == 3){
      disp = disp+"="
      inp = give+""
    }   
  }
}