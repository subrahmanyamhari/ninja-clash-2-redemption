var img = {
  a:null,
  b:null,
  c:null
}
var rot = 0,mir = 1;
var player


function preload(){
  img.a = loadImage("right hand.png");
  img.b = loadImage("body.png");
  img.c = loadImage("sheild.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);
  player = new Susanoo(img,rgb(255,0,255));
}

function draw(){
  background(0);
  player.use();
  drawSprites();
}
