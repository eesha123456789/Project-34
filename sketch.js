//Create variables here
var dog, sittingDog, happyDog
var database, foodS, foodStock
function preload()
{
	//load images here
  sittingDog=loadImage('dogImg.png')

  happyDog=loadImage('dogImg1.png')
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,350)
  dog.addImage(sittingDog)
  dog.scale=0.3

  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog)
    foodS=foodS-1
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(sittingDog)
  }
  drawSprites();
  //add styles here text()
  fill('white')
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",125,50)
  text("Food Remaining: "+foodS,200,230)
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}



