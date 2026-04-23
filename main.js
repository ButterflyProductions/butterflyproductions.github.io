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

var playerX = parseInt(playerstyle.getPropertyValue("left").replace("px",""))
var playerY = parseInt(playerstyle.getPropertyValue("top").replace("px",""))

var keypresseddown = false
var keypressed = ""

// Code
addEventListener("keydown", function keydown(event) {  
    event.preventDefault(); 
    keypresseddown = true
    keypressed = event.code
    console.log(event.code)
    console.log(keypressed)
    if(keypressed === "ArrowRight" || keypressed === "KeyD") {
        move(player, playerX, playerY, "right", 20)
    }
    if(keypressed === "ArrowLeft" || keypressed === "KeyA") {
        move(player, playerX, playerY, "left", 20)
    }
    if(keypressed === "ArrowUp" || keypressed === "KeyW") {
        move(player, playerX, playerY, "up", 20)
    }
    if(keypressed === "ArrowDown" || keypressed === "KeyS") {
        move(player, playerX, playerY, "down", 20)
    }
})
addEventListener("keyup", function keyup(event) {
    keypresseddown = false
    keypressed = ""
    console.log(keypressed)
})

function move(element, elementX, elementY, direction, distance) {
    let rawdirection = direction
    if (direction === "up" || direction === "down") {
        movementdirection = "top"
    }
    else {
        movementdirection = "left"
    }
    let movementdistance = distance;
    if(rawdirection === "up" || rawdirection === "left") {
        movementdistance *= -1
    }
    console.log(rawdirection)
    console.log(movementdirection)
    console.log(movementdistance)
    console.log(elementX)
    console.log(elementY)
    let elementheight = parseInt(element.style.height.replace("px",""))
    let elementwidth = parseInt(element.style.width.replace("px",""))
    if(movementdirection === "left") {
        elementX = elementX + movementdistance
        if (elementX < gamebounds.left) {
            elementX = gamebounds.left
        }
        if (elementX > gamebounds.right) {
            elementX = gamebounds.right - elementwidth
        }
        console.log(elementX)
        console.log(gamebounds.left)
        console.log(gamebounds.right)
    }
    else{
        elementY = elementY + movementdistance
        if (elementY <gamebounds.top) {
            elementY = gamebounds.top
        }
        if (elementY > gamebounds.bottom) {
            elementY = gamebounds.bottom - elementheight
        }
        console.log(elementY)
        console.log(gamebounds.top)
        console.log(gamebounds.bottom) 
    }
    element.style.left = elementX + "px"
    element.style.top = elementY + "px"
    console.log(elementX)
    console.log(element.style.left)
    console.log(elementY)
    console.log(element.style.top)
    elementX = element.style.left
    elementY = element.style.top
}