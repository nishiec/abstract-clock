rand = [];
//rand2 = [];
w = 800;
h = 800;

function setup() { 
  createCanvas(w, h);
  for(let i=0; i <12; i++){
   append(rand, random(100)); 
   //append(rand2, random(70));
  }
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
  rect(0, 0, w, minute()*factor);

}

function hours(){
  //rand_val = random(w);
  
  for(let i=0; i<hour();i++){
    translate(rand[i],rand[i+1]);
    noStroke();
    fill(255);
    for (let i = 0; i < 6; i ++) {
      ellipse(0,0,50, 80);
      rotate(PI/3);
      
    }
  }
}

/*
function cloud(x, w) {
  beginShape();
    noStroke();
    fill(255);
    for (let i = 0; i < 6; i ++) {
      ellipse(x, x, w, w+30);
      rotate(PI/3);
    } 
  endShape(CLOSE);
}
*/
