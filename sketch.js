//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies =  Matter.Bodies;
//const Constraint = Matter.Constraint;
var bgImage,ground,groundImage;
var santa,santaImage;
var ice=[];
var maxSnow=100;

function preload(){
  bgImage = loadImage("snow2.jpg");
  groundImage=loadImage("ground.PNG");

  //santaImage=loadAnimation("sc1.PNG","sc2.PNG","sc3.PNG","sc4.PNG","sc5.PNG","sc6.PNG","sc7.PNG","sc8.PNG","sc9.PNG","sc10.PNG","sc11.PNG","sc12.PNG")

}

function setup() {
  createCanvas(1200,600);
  
  //engine=Engine.create();
  //world= engine.world;
  
  ground=createSprite(600,700);
  ground.addImage(groundImage);
  ground.scale=5;
  ground.velocityX=-7;

}

function draw() {
  background(bgImage);
  //Engine.update(engine);

  if(ground.x < 500){
    ground.x=600;
  }


  drawSprites();
}