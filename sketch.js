w = 800;
h = 800;
function setup() { 

  createCanvas(h, h);
  
} 

function draw() { 
  background(0); //black background
  minutes();
  seconds(); //tiny circular abstract clock 

  

}

function seconds(){
  //seconds positioned in the bottom right corner
  noStroke();
  fill(255);
  ellipse(600,600,300,300);
  fill(255,209,220);
  //in radians starting place is 0pi
  arc(600,600,300,300,0,(second()/30*PI));
}

function minutes(){
  //entire canvas is filled depending on the minutes passed
  factor = h/60;
  noStroke();
  fill(209, 220, 255);
  rect(0, 0, w, minute()*factor);
}
