function setup() { 
  createCanvas(800, 800);
  
} 

function draw() { 
  background(0); //black background
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
  
  
}
