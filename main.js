function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	marioJump = loadSound("jump.wav");
	marioCoin = loadSound("coin.wav");
	marioKick = loadSound("kick.wav");
	marioOver = loadSound("gameover.wav");
	marioDie = loadSound("mariodie.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("webcam");
    poseNet = ml5.poseNet(video, model_loaded);
    poseNet.on('pose', got_poses);
}

function draw() {
	game()
}
function model_loaded() {
 console.log("Model loaded.");
}
function got_poses(results){
 if(results.length > 0){
  console.log(results);
  noseX = results[0].pose.nose.x;
  noseY = results[0].pose.nose.y;
 }
}