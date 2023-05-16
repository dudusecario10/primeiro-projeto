var pecinha,pecinha1,pacinha2,pecinha3,pecinha4,
pecinha5,pecinha6
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12

var count


function setup() {
  createCanvas(400, 400);
  
  wall1 = createSprite(190, 120, 250, 3)
    wall2 = createSprite(190, 260, 250, 3)
    wall3 = createSprite(67, 145, 3, 50)
    wall4 = createSprite(64, 235, 3, 50)
    wall5 = createSprite( 313, 145, 3, 50)
      wall6 = createSprite( 313, 235, 3, 50)
      wall7 = createSprite( 41, 170, 50, 3)
      wall8 = createSprite( 41, 210, 50, 3)
      wall9 = createSprite( 337, 210, 50, 3)
      wall10 = createSprite( 337, 170, 50, 3)
      wall11 = createSprite( 18, 190, 3, 40)
      wall12 = createSprite( 361, 190, 3, 40)
  
  pecinha = createSprite(33, 190, 12, 12)
  
      pecinha1 = createSprite(100, 190, 12, 12) 
      pecinha2 = createSprite(175, 190, 12, 12)
      pecinha3 = createSprite(230, 190, 12, 12) 
      pecinha4 = createSprite(290, 190, 12, 12)
      pecinha5 = createSprite(245, 190, 12, 12) 
      pecinha6 = createSprite(145, 190, 12, 12) 
  
  
  pecinha.shapeColor ='green'
  
  
  
  pecinha1.shapeColor ='red'
  pecinha2.shapeColor ='red'
  pecinha3.shapeColor ='red'
  pecinha4.shapeColor ='red'
  pecinha5.shapeColor ='red'
  pecinha6.shapeColor ='red'
  
  
  pecinha1.velocityY = 8
  pecinha2.velocityY = -8
  pecinha3.velocityY = 8
  pecinha4.velocityY = -8
  pecinha5.velocityY = 8
  pecinha6.velocityY = -8
  

  
  
  
}

function draw() {
  background('blue');
  
  fill("lightbiue")
  
  rect(18, 170, 52, 40)
  rect(308, 170, 52, 40)
  
  
  
  
  pecinha1.bounceOff(wall1)
  pecinha1.bounceOff(wall2)
  
  pecinha2.bounceOff(wall1)
  pecinha2.bounceOff(wall2)
  
  pecinha3.bounceOff(wall1)
  pecinha3.bounceOff(wall2)
  
  pecinha4.bounceOff(wall1)
  pecinha4.bounceOff(wall2)
  
  pecinha5.bounceOff(wall1)
  pecinha5.bounceOff(wall2)
  
  pecinha6.bounceOff(wall1)
  pecinha6.bounceOff(wall2)
  
  
    if(keyDown("right")){
     pecinha.x = pecinha.x + 2 
    } 
  
  if(keyDown('left')){
    pecinha.x = pecinha.x - 2
  }
    if(keyDown('up')){
    pecinha.y = pecinha.y - 2
    }
    if(keyDown('down')){
    pecinha.y = pecinha.y + 2
    }
  if(
  
  pecinha.isTouching(wall11) ||
  pecinha.isTouching(wall12) ||
  pecinha.isTouching(pecinha1) ||
  pecinha.isTouching(pecinha2) ||
  pecinha.isTouching(pecinha3) ||
  pecinha.isTouching(pecinha4) ||
  pecinha.isTouching(pecinha5) ||
  pecinha.isTouching(pecinha6)
    
    
    
  ) {  
  pecinha.x = 40  
  pecinha.y = 190  
  count = count + 1  
  } 
  pecinha.collide(wall1)
  pecinha.collide(wall2)
  pecinha.collide(wall3)
  pecinha.collide(wall4)
  pecinha.collide(wall5)
  pecinha.collide(wall6)
  pecinha.collide(wall7)
  pecinha.collide(wall8)
  pecinha.collide(wall9)
  pecinha.collide(wall10)
  pecinha.collide(wall11)
  pecinha.collide(wall12)
  
  
drawSprites()
}