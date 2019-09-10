w = 800;
h = 800;
function setup() { 
  createCanvas(w, h);
} 

function draw() { 
  background(201, 233, 246); //sky background
  minutes(); // the sky turning into night
  seconds(); // circular abstract sun or moon
  hours(); // clouds
}

function seconds(){
  //seconds positioned in the bottom right corner
  noStroke();
  fill(245, 243, 206);
  ellipse(600,600,300,300);
  fill(	255, 223, 0);
  //in radians starting place is 0pi
  arc(600,600,300,300,0,(second()/30*PI));
}

function minutes(){
  //entire canvas is filled depending on the minutes passed
  factor = h/60;
  noStroke();
  fill(	0);
  filled = minute()*factor
  rect(0, 0, w, filled);
  
  return filled;
}

function hours(){
  for (let i = 0; i < hour(); i++){
    spawnCloud();
  }
}

function spawnCloud(){
  translate(500,500);
    noStroke();
    fill(255);
    for (let i = 0; i < 6; i ++) {
      ellipse(0, 0, 80, 50);
      rotate(PI/3);
    } 
  
}





