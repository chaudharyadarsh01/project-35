var balloon,balloonImage1,balloonImage2;
var ballonPosition=database.ref('ballon/height');
ballonPosition.on("value",readPosition, showError);

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  ballon=createSprite(250,450,150,150);
  ballon.addAnimation("hotAirBalloon",balloonImage1);
  ballon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0);
    ballon.addAnimation("hotAirBalloon",balloonImage2);
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(+10,0);
    ballon.addAnimation("hotAirBalloon",balloonImage2);
    
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    ballon.addAnimation("hotAirBalloon",balloonImage2);
    ballon.scale = ballon.scale +0.03;
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,+10);
    ballon.addAnimation("hotAirBalloon",balloonImage2);
    ballon.scale = ballon.scale -0.01;
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateheight(x,y){ 
  database.ref('balloon/height').set({
     'x': height.x + x , 
     'y': height.y + y 
  })
}
  function readheight(data){ 
    height = data.val(); 
    ballon.x = height.x; 
    ballon.y = height.y;
  }
     function showError(){ 
       console.log("Error in writing the database"); 
     }
