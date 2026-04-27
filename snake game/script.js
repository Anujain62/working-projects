let canvas = document.querySelector("canvas")
let pen = canvas.getContext("2d")

// pen.fillStyle = "red"   //fill color in shape
// pen.fillRect(20,20,50,50)      // create shape
// pen.clearRect(20,10,50,50)     // to delete any part of shape

let snakeCells = [[0,0]]
let cell = 50
let direction = "right"
let gameOver = false
let score = 0
let random = generateRandomCell()

let id = setInterval(()=>{
 draw()
 update()
},200)

document.addEventListener("keydown",(e)=>{
 if(e.key=="ArrowUp"){
  direction = "up"
 }
 else if(e.key=="ArrowDown"){
  direction = "down"
 }
 else if(e.key == "ArrowLeft"){
  direction = "left"
 }
 else{
  direction = "right"
 }
})

function draw(){
 if(gameOver == true){
  clearInterval(id)
  pen.font = '60px sans-serif';
  pen.fillText('Game Over',650,350)
  return
 }
 pen.clearRect(0,0,1500,700)
 for(let i of snakeCells){
  pen.fillStyle = "red"
  pen.fillRect(i[0],i[1],cell,cell)
 }
 pen.font = '40px sans-serif'
 pen.fillText(`Score = ${score}`,50,50)
 pen.fillStyle = "white"
 pen.fillRect(random[0],random[1],cell,cell)
}

function update(){
 let headX = snakeCells[snakeCells.length-1][0]
 let  headY = snakeCells[snakeCells.length-1][1]
 let newX
 let newY
 if(direction=="right"){
  newX = headX+cell
  newY = headY
  if(newX==1500){
   gameOver = true
  }
 }
 else if(direction=="left"){
  newX = headX-cell
  newY = headY
  if(newX<0){
   gameOver = true
  }
 }
 else if(direction=="up"){
  newX = headX
  newY = headY-cell
  if(newY<0){
   gameOver=true
  }
 }
 else{
  newX = headX
  newY = headY+cell
  if(newY==700){
   gameOver=true
  }
 }

 snakeCells.push([newX,newY])

 if(newX==random[0] && newY==random[1]){
  random=generateRandomCell()
  score+=1
 }
 else{
  snakeCells.shift()
 }
}

function generateRandomCell(){
 return [
  Math.round((Math.random()*1500)/cell)*cell,
  Math.round((Math.random()*700)/cell)*cell
 ]
}
























