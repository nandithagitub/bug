status_model = "";
img = ""

function preload(){
img = loadImage("jisoorose.jpg");
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
    fill("skyblue");
    text("Person", 45, 75);
    noFill();
    stroke("skyblue");
    rect(30,60,150,450);
    
    fill("violet");
    text("Person", 350, 70);
    noFill();
    stroke("violet");
    rect(200,50,200,440);
}