var bubble,bubbleImg;
var garbage1Img,garbage2Img,garbage3Img;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;



function preload(){
bubbleImg=loadImage("./assets/dog1.jpg");
garbage1Img=loadImage("./assets/garbage.jpg");
garbage2Img=loadImage("./assets/garbage2.png");
garbage3Img=loadImage("./assets/garbage3.jpg");

}

function setup(){
createCanvas(700,700);

bubble=createSprite(50,50,10,10);
bubble.addImage(bubbleImg);
bubble.scale=0.1;

b1=createSprite(100,40,10,100);
b2=createSprite(50,150,100,10);
b3=createSprite(200,40,10,800);
b4=createSprite(150,240,100,10);
b5=createSprite(50,350,100,10);
b6=createSprite(50,500,100,10);
}

function draw(){
background("lightblue");

drawSprites();
}