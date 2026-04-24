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

var keypresseddown = false
var keypressed = ""

// Code
addEventListener("keydown", function keydown(event) {  
    event.preventDefault(); 
    keypresseddown = true
    keypressed = event.code
    console.log(event.code)
    console.log(keypressed)
    console.log(keypresseddown)
    if (event.code === "ArrowUp" || event.code === "KeyW"){
        playerY = move(player, playerX, playerY, "up", 5)
    }
    if (event.code === "ArrowLeft" || event.code === "KeyA"){
        playerX = move(player, playerX, playerY, "left", 5)
    }
    if (event.code === "ArrowDown" || event.code === "KeyS"){
        playerY = move(player, playerX, playerY, "down", 5)
    }
    if (event.code === "ArrowRight" || event.code === "KeyD"){
        playerX = move(player, playerX, playerY, "right", 5)
    }
    player.style.top = playerY
    player.style.left = playerX
})
addEventListener("keyup", function keyup(event) {
    keypresseddown = false
    keypressed = ""
    console.log(keypressed)
})

if(keypresseddown === true){
    console.log("keypressed!")
}

function move(element, elementX, elementY, direction, distance) {
    let positionX = elementX
    let positionY = elementY
    let movementdirection = direction
    let movementdistance = distance
    if (keypresseddown === true){
        if(movementdirection === "up" || movementdirection === "left"){
            movementdistance *= -1
        }
        if(movementdirection === "up" || movementdirection === "down"){
            positionY += movementdistance
            return positionY
        }
        else{
            positionX += movementdistance
            return positionX
        }
    }
}