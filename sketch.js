var garden,rabbit;
var gardenImg,rabbitImg;
var apple , appleImg;
var leaves , leaveImg;
var select;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.pnh");
  leaveImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();


 function createApples(){
 apple = createSprite(random(50,350),40,10,10);

 //add image to apple sprite
 apple.addImage(appleImg);
 //scale the apple sprite if needed
 apple.scale = 0.5;
 //add velocity to the apple sprite so that it moves downwards
 apple.velocitY = -3;
 //give liftime to the sprite
 apple.lifetime = 400;
 }

 function createLeaves(){
leaves = createSprite(random(50,350,40,10,10));

//add image to the leaves sprite
leaves.addImage(leaveImg);

//add velocity to make the leave sprite move downwards
leaves.velocitY = -3;

//scale the leaves if needed
leaves.scale = 0.5;

//give lifetime to the sprite
leaves.lifetime = 400;
 }


select = math.round(random(1,2));




if (frameCount % 80 == 0 ){
 if(select == 1){
 createApples
 }
 else{
   createLeaves
 }

  
 }






}