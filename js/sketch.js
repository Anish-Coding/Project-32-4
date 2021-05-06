//creating the constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//creating the variables
var engine, world;
var totalCh = 3;
var balanceCh = totalCh;
var playerState = "onSling";
var score = 0;
var level = 1;
var gamerState = 0;
var myColor = "blue";
var readyForFly = false;
var isLaunched = false;

scoreDis = []; // Displaying the score
lvlDis = []; // Displaying the level
totalDis = []; // Displaying the total score
var scorestatus = 0, hitstatus = 0;


function preload() {
}

function setup(){
    var canvas = createCanvas(1530,715); // Create a canvas with x = 1530, y = 715
    engine = Engine.create();
    world = engine.world;

    //Creating the objects
    ground = new Ground(765,height,1530,20);
    shuriken = new Shuriken(200,50);
    ninjaPlatform = new Ground(250, 270, 100, 240);
    horizPlatform = new Ground(900,130,140,10);
    verticPlatform = new Ground(980,120,10,100);
    dartBoard = new DartBoard(900,100);
    ninja = new Ninja(shuriken.body,{x:200, y:50}, 200, 10);
 }

function draw(){
    
    background(0); // Background is black (To show night background)

    //Displaying the gamerState (in console)
    console.log(gamerState);

    Engine.update(engine);

    textSize(40) //Big text
    text("score = " + score, 1000,50); //Text for score
    text("level = " + level, 1250,50); //Text for level

    if(level === 2){ // If level is 2 then object's positions are changed    
        ninja.changePosition(300,470);
        ninjaPlatform.changeGrPosition(300,500);
        shuriken = new Shuriken(150,100);
    }

    ninja.display();    
    ground.display();

    horizPlatform.display();
    verticPlatform.display();

    //Displaying the scores
    dartBoard.display();
    dartBoard.score();    

    shuriken.display();
    ninjaPlatform.display();
}

function mouseDragged(){
    if ( (mouseX >= 0 && mouseX <= 230 && mouseY >= 0 && mouseY <= 100 && readyForFly === false) || (isLaunched === true) ) {
        Matter.Body.setPosition(shuriken.body, {x: mouseX , y: mouseY}); //When dragged the x and y is changed to mouseX and mouseY
        readyForFly = true;
    }
}

function mouseReleased(){
    if (readyForFly === true) {
        ninja.fly(); // In Ninja.js 
        playerState = "launched";
        isLaunched = true;
    }
}

//If space key is pressed then the following happens :
// Shuriken is placed back to its position and attached to the ninja
// gamerState is increased by 1

function keyPressed(){
    if(scorestatus===1 || hitstatus === 0){

        if(keyCode === 32 ){
            shuriken.trajectory = [];
            Matter.Body.setPosition(shuriken.body, {x:  200, y: 50});
            // dartBoard = new DartBoard(900,100);
            ninja.attach(shuriken.body);
            gamerState = gamerState + 1;
        }

        //If gamerstate is added by 3 it goes to next level
        if(gamerState === 3 || gamerState === 7 || gamerState === 10 || gamerState === 13){
            level = level + 1;
            
        }

        scorestatus = 0;
    }
}