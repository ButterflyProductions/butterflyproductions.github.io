/* This is first going to be a practice JS Document, before becoming the code for my Spring Unsprung 2026 project.

Project Name: Carousel of a Thousand Dreams
Project Author: ButterflyProductions
Notes: I hope to fucking god this works. 
*/

// Classes
class Box {
    constructor(height, width, startposX, startposY, ID){
        this.height = height
        this.width = width
        this.posX = startposX
        this.posY = startposY
        this.ID = ID
    }

    // Variables
    movementspeed = 0 //most objects won't need to move, but this will be useful for cutscenes

    animationFrameID = null

    move(){
        this.update()
    }

    update(){
        this.animationFrameID = requestAnimationFrame(() => this.update())
    }

    stop(){
        if (this.animationFrameID !== null){
            cancelAnimationFrame(this.animationFrameID);
            this.animationFrameID = null
        }
    }

}

class Player extends Box {
    constructor(){
        super(64, 64, 500, 500, document.getElementById("playerplaceholder"))
    }
    keypresseddown = {
    moveup: false,
    moveleft: false,
    movedown: false,
    moveright: false
    }
}


// Variables
const player = new Box(64, 64, 500, 500, document.getElementById("playerplaceholder"))
var gamescreen = document.getElementById("gameplaceholder");

var gamestyle = window.getComputedStyle(gamescreen)

var gamebounds = gamescreen.getBoundingClientRect()

var playerX = 500
var playerY = 500

var keypressed = ""

// Code

addEventListener("keydown", function keydown(event) {  
    event.preventDefault(); 
    keypressed = event.code
    console.log(event.code)
    console.log(keypressed)
    if (keypressed === "ArrowUp" || keypressed.code === "KeyW"){
        console.log("up!")
        pressdown(player.keypresseddown.moveup)
        console.log(keypresseddown.moveup)
        playerY = move(player, playerX, playerY, "up", 5)
    }
    if (keypressed === "ArrowLeft" || keypressed === "KeyA"){
        pressdown(player.keypresseddown.moveleft)
        playerX = move(player, playerX, playerY, "left", 5)
    }
    if (keypressed === "ArrowDown" || keypressed === "KeyS"){
        pressdown(player.keypresseddown.movedown)
        playerY = move(player, playerX, playerY, "down", 5)
    }
    if (keypressed === "ArrowRight" || keypressed === "KeyD"){
        pressdown(player.keypresseddown.moveright)
        playerX = move(player, playerX, playerY, "right", 5)
    }
    player.style.top = playerY
    player.style.left = playerX
})
addEventListener("keyup", function keyup(event) {
    keypressed = ""
    console.log(keypressed)
    if (keypressed === "ArrowUp" || keypressed.code === "KeyW"){
        pressup(player.keypresseddown.moveup)
        playerY = move(player, playerX, playerY, 5)
    }
    if (keypressed === "ArrowLeft" || keypressed === "KeyA"){
        pressup(player.keypresseddown.moveleft)
        playerX = move(player, playerX, playerY, "left", 5)
    }
    if (keypressed === "ArrowDown" || keypressed === "KeyS"){
        pressup(player.keypresseddown.movedown)
        playerY = move(player, playerX, playerY, "down", 5)
    }
    if (keypressed === "ArrowRight" || keypressed === "KeyD"){
        pressup(player.keypresseddown.moveup)
        playerX = move(player, playerX, playerY, "right", 5)
    }
})

function pressdown(direction){
    direction = true
    console.log("Over here!")
}

function pressup(direction){
    direction = false
}


function move(element, elementX, elementY, distance) {
    console.log("You're in!")
    let positionX = elementX
    let positionY = elementY
    let movementdistance = distance
    while(keypresseddown.moveup === true){
        playerY += -(distance)
        return playerY
    }
    while(keypresseddown.moveleft === true){
        playerX += -(distance)
        return playerX
    }
    while(keypresseddown.movedown === true){
        playerY += distance
        return playerY
    }
    while(keypresseddown.moveright === true){
        playerX += distance
        return playerX
    }
}