status_model = "";
img = ""

function preload(){
img = loadImage("fru.jpeg");
}

function setup(){
    canvas = createCanvas(450,550);
    canvas.position(900,200);
    object_Detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status_model = true;
    object_Detector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
function draw(){
    image(img, 0, 0, 430, 520);
    fill("violet");
    text("Fruit Basket", 330, 70);
    noFill();
    stroke("cyan");
    rect(25,50,380,440);
}