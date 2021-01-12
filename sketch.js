var mario, marioImg, coin, coinImg, bg, bgImg; 

function preload(){
    bgImg = loadImage("images/bg1.png");
    marioImg = loadAnimation("images/marioWalking-0.png","images/marioWalking-1.png","images/marioWalking-2.png");
}

function setup(){
    createCanvas(800,800);
    bg = createSprite(400,400); 
    bg.addImage(bgImg); 
    bg.scale = 5.5; 
    bg.velocityX = -3; 
 
    mario = createSprite(200,650,10,10);
    mario.addAnimation("mario1", marioImg);
}

function draw(){
    background(0); 

    if(bg.x<0){
        bg.x = bg.width/2; 
    }

    if(keyDown(32)){
        mario.velocityY = -10; 
    }
    mario.velocityY = mario.velocityY + 0.8; 

    drawSprites(); 
}