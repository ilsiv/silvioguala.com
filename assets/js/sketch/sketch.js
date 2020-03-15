var dim = 30;
var w = dim / 10;
var cols, rows;
var piastrelle = [];
// var slider;



function setup() {

  var canvas = createCanvas(windowWidth, windowHeight);
  // canvas.id('sketch-container');
  canvas.id('sketch-container');

  // slider = createSlider(1,60,10);
  // slider.position(100,100);
  // piastrelle =[];
  initialize();

}

function initialize() {
  piastrelle = [];
  cols = ceil(windowWidth / dim) + 1;
  rows = ceil(windowHeight / dim) + 1;
  for (let j = 0; j < rows - 1; j++) {
    piastrelle.push([]);
    for (let i = 0; i < cols - 1; i++) {
      piastrelle[j].push(new Piastrella(i, j));
    }
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initialize();
}


function draw() {
  background(255);
  let h = map(constrain(minute(),0,59),0,59,100, 0);
  //console.log(h);
  colorMode(HSB);
  background (178,10,100);
  colorMode(RGB);
  frameRate(0.5);
  noStroke();
  for (var j = 0; j < rows - 1; j++) {
    for (var i = 0; i < cols - 1; i++) {
      let pias = piastrelle[j][i];
      pias.update();
      pias.show();
    }
  }
}


class Piastrella {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.r = 0;
    this.col1 = color(255, 200, 0, 100);
    this.col2 = color(0, 100, 255, 100);
  }

  update() {
    let rot = PI / floor(random(1, 3)) * floor(random(-1, 1));
    if (this.r != rot) {
      this.r = rot;
    }
  }

  show() {
    push();
    translate(5 * w + this.i * w * 10, 5 * w + this.j * w * 10);
    rotate(this.r);
    beginShape();
    fill(this.col1);
    vertex(-4 * w, -5 * w);
    vertex(0, -w);
    vertex(4 * w, -5 * w);
    vertex(5 * w, -5 * w);
    vertex(5 * w, -4 * w);
    vertex(w, 0);
    vertex(5 * w, 4 * w);
    vertex(5 * w, 5 * w);
    vertex(4 * w, 5 * w);
    vertex(-5 * w, -4 * w);
    vertex(-5 * w, -5 * w);
    endShape(CLOSE);

    beginShape();
    fill(this.col2);
    vertex(-w, -5 * w);
    vertex(w, -5 * w);
    vertex(0, -4 * w);
    endShape(CLOSE);

    beginShape();
    fill(this.col2);
    vertex(5 * w, -w);
    vertex(5 * w, w);
    vertex(4 * w, 0);
    endShape(CLOSE);

    beginShape();
    fill(this.col1);
    vertex(-5 * w, 4 * w);
    vertex(-4 * w, 5 * w);
    vertex(-5 * w, 5 * w);
    endShape(CLOSE);


    beginShape();
    fill(this.col2);
    vertex(-5 * w, w);
    vertex(-w, 5 * w);
    vertex(w, 5 * w);
    vertex(-5 * w, -w);
    endShape(CLOSE);

    pop();
  }
}
