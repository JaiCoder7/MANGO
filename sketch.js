const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var boyImg,platform;
var bird, slingShot;
var mango,mango1,mango2,mango3,mango4;
var treeIMG,tree;
function preload(){

boyIMG=loadImage("Pluckingmangoes/boy.png");
treeIMG=loadImage("Pluckingmangoes/tree.png");
}
    
var boyIMG,boy;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    

    mango = new Mango(900,300);
    mango1 = new Mango(850,250);
    mango2 = new Mango(910,370);
    mango3 = new Mango(800,400);
    mango4 = new Mango(1000,400);

boy = createSprite(250,730,10,10);
tree = createSprite(900,500,20,20);
tree.addImage("Tree",treeIMG);
boy.addImage("boy1",boyIMG);
  boy.scale=0.1;
  tree.scale=0.5;
    bird = new Stone(250,730);

   
    
    slingShot = new SlingShot(bird.body, {x:200,y:670});
}

function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
slingShot.fly();

}


function detectollision(bird1,mango12){
    mangoBodyPosition = mango12.body.position
    birdBodyPosition = bird1.body.position
    
    var distance=dist(birdBodyPosition.x,birdBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    
    if(distance<-mango12.r+bird1.r){
    Matter.Body.setStatic(mango12.body,false);
    
    }

        }
      


function draw(){
    background("white");
    Engine.update(engine);
    
    
    
    
    
    
    strokeWeight(4);
  
ground.display();


    slingShot.display();    
    drawSprites();

    mango.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
        bird.display();
        detectollision(bird,mango);
        detectollision(bird,mango1);
        detectollision(bird,mango2);
        detectollision(bird,mango3);
        detectollision(bird,mango4);

   
}

function  keyPressed(){
    if(keyCode === 32){

// Matter.Body.setPosition(bird.body, {x:200,y:250})
slingShot.attach(bird.body);
    }
}
