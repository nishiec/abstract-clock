function setup() { 
  createCanvas(400, 400);
  
} 

function draw() { 
  background(0); //black background
  
  //seconds 
  noStroke();
  fill(255);
  ellipse(300,300,100,100);
  fill(255,209,220);
  arc(300,300,100,100,1.5*PI,(second()/60*PI));

  

}

  
