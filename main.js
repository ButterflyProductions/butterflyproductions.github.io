/* This is first going to be a practice JS Document, before becoming the code for my Spring Unsprung 2026 project.

Project Name: Carousel of a Thousand Dreams
Project Author: ButterflyProductions
Notes: I hope to fucking god this works. 
*/

// Variables
var player = document.getElementById("playerplaceholder");
var gamescreen = document.getElementById("gameplaceholder");

var playerstyle = window.getComputedStyle(player)
var gamestyle = window.getComputedStyle(gamescreen)

var gamebounds = gamescreen.getBoundingClientRect()

var playerX = 500
var playerY = 500

var moveup = false
var moveleft = false
var movedown = false
var moveright = false
var keypressed = ""

// Code
addEventListener("keydown", function keydown(event) {  
    event.preventDefault(); 
    keypressed = event.code
    console.log(event.code)
    console.log(keypressed)
    if (keypressed === "ArrowUp" || keypressed.code === "KeyW"){
        console.log("up!")
        pressdown(moveup)
        playerY = move(player, playerX, playerY, "up", 5)
    }
    if (keypressed === "ArrowLeft" || keypressed === "KeyA"){
        pressdown(moveleft)
        playerX = move(player, playerX, playerY, "left", 5)
    }
    if (keypressed === "ArrowDown" || keypressed === "KeyS"){
        pressdown(movedown)
        playerY = move(player, playerX, playerY, "down", 5)
    }
    if (keypressed === "ArrowRight" || keypressed === "KeyD"){
        pressdown(moveright)
        playerX = move(player, playerX, playerY, "right", 5)
    }
    player.style.top = playerY
    player.style.left = playerX
})
addEventListener("keyup", function keyup(event) {
    keypressed = ""
    console.log(keypressed)
    if (keypressed === "ArrowUp" || keypressed.code === "KeyW"){
        pressup(moveup)
        playerY = move(player, playerX, playerY, 5)
    }
    if (keypressed === "ArrowLeft" || keypressed === "KeyA"){
        pressup(moveleft)
        playerX = move(player, playerX, playerY, "left", 5)
    }
    if (keypressed === "ArrowDown" || keypressed === "KeyS"){
        pressup(movedown)
        playerY = move(player, playerX, playerY, "down", 5)
    }
    if (keypressed === "ArrowRight" || keypressed === "KeyD"){
        pressup(moveright)
        playerX = move(player, playerX, playerY, "right", 5)
    }
})

function pressdown(direction){
    direction = true
}

function pressup(direction){
    direction = false
}


function move(element, elementX, elementY, distance) {
    console.log("You're in!")
    let positionX = elementX
    let positionY = elementY
    let movementdistance = distance
    while(moveup === true){
        playerY += -(distance)
        return playerY
    }
    while(moveleft === true){
        playerX += -(distance)
        return playerX
    }
    while(movedown === true){
        playerY += distance
        return playerY
    }
    while(moveright === true){
        playerX += distance
        return playerX
    }
}