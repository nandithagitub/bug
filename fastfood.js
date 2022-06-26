status_model = "";
img = "";

function preload() {
  img = loadImage("fafoo.jpeg");
}

function setup() {
  canvas = createCanvas(450, 450);
  canvas.position(900, 200);
  object_Detector = ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function modelLoaded() {
  console.log("Model Loaded");
  status_model = true;
  object_Detector.detect(img, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
  }
}
function draw() {
  image(img, 0, 0, 450, 450);
  fill("red");
  text("FastFood", 270, 230);
  noFill();
  stroke("yellow");
  rect(2, 170, 440, 240);
}
