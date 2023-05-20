let sel;
polygon();

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  frameRate(10)
  background(200);
  sel = createInput();
  sel.position(220, 80);
  sel.changed(draw);
}

function mySelectEvent() {
  let item = sel.value();
  background(200);
  text("it's a " + item + '!', 50, 50);
}

function draw() {
  let sides = parseInt(sel.value())
  background(700);
  background(0, 0, 0);
  strokeWeight(5);
  fill(random(150, 255), random(150, 255), random(150, 255));
  //square(random(0, width), random(0, height), random(0, width), random(0, 100));
  for(let i = 0;i < sides;i++){
       polygon(random(0, width), random(0, height), random(10, 100), sides);
  }
 
  
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let i=0; i<TWO_PI; i += angle) {
    let sx = x + cos(i) * radius;
    let sy = y + sin(i) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


