function setup() { 
  createCanvas(800, 800);
  
} 

function draw() { 
  background(0); //black background
  
  //seconds 
  noStroke();
  fill(255);
  ellipse(400,400,300,300);
  fill(255,209,220);
  arc(400,400,300,300,1.5*PI,(second()/60*PI));

  

}

  
