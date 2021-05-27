var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
   database=firebase.database()
   database.ref('ball').on("value",readposition)
   ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
 database.ref('ball').set({
 x:ball.x+x,
 y:ball.y+y    
 })

}

function readposition(x){
    console.log("hi")
    var Data=x.val()
console.log(Data)
    ball.x=Data.x
ball.y=Data.y

}















