let a, b;

function setup() {
  createCanvas(400, 400);
  background("#673AB7");
}

function draw() {
  background(220);
  a = 4;
  b = 2;
  fill("#FFEB3B");
  MyShape(mouseX, mouseY, 50, 50);
  MyShape(mouseX, mouseY, 50, 50);
}

function MyShape(x, y, w, h) {
  square(x, y, w);
  circle(x + w / b, y + w / b, w);
  circle(x + w - 10, y + 15, w / a);
  circle(x + w - 40, y + 15, w / a);
  rect(x + w / a, y + w / b, w / b, h / a);
}
