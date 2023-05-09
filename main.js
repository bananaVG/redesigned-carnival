Peaches=""
Vadivelu=""
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;


function preload(){
    Peaches=loadSound("peaches.mp3");
    Vadivelu=loadSound("vadivelu.mp3");
}

function setup(){
    createCanvas(100,100);
    canvas.center();
    video=createCapture("VIDEO");
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

extra.hide();


function draw(){
    
}

function modelloaded(){
    console.log("Cheta, posenet initialized w/ my chapal");
}

function gotposes(){
     if(results.length > 0)
    {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;

        console.log("leftwristx = "+ leftwristx);
        console.log("leftwristy = "+ leftwristy);
        console.log("rightwristx = "+ rightwristx);
        console.log("rightwristy = "+ rightwristy);
    }
}