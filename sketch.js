function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
  background(225);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  rect(0, 0, 20, 20);
}
