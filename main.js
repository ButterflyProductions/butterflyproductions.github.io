/* This is first going to be a practice JS Document, before becoming the code for my Spring Unsprung 2026 project.

Project Name: Carousel of a Thousand Dreams
Project Author: ButterflyProductions
Notes: I hope to fucking god this works. 
*/

// Variables
var player = document.getElementById("playerplaceholder")
var gamescreen = document.getElementById("gameplaceholder")

var playerstyle = window.getComputedStyle(player)
var gameattributes = window.getComputedStyle(gamescreen)

var playerX = playerstyle.getPropertyValue(left).replace("px","")
var playerY = playerstyle.getPropertyValue(top).replace("px","")
var gamebounds = gamescreen.getBoundingClientRect()

var keypresseddown = false
var whatkey

// ----------- Functions ----------- //
function move(element, direction, distance) {
    let direction = direction
    let movementdirection = move.direction() === "up" || "down" ? "top" : "left";
    let movementdistance = distance;
    if(movementdirection === "up" || "left") {
        distance *= -1
    }
    elementstyle = window.getComputedStyle(element)
    elementstyle.movementdirection = (elementstyle.getPropertyValue(movementdirection).replace("px","") + movementdistance) + "px"
    if(elementstyle.getPropertyValue(movementdirection).replace("px","") > gamebounds.direction) {
        elementstyle.movementdirection = gamebounds.direction
    }
}

function playermovement(whatkey) {
    if(whatkey === "ArrowRight" || "KeyD") {
        move(player, "right", 20)
    }
    if(whatkey === "ArrowLeft" || "KeyA") {
        move(player, "left", 20)
    }
    if(whatkey === "ArrowUp" || "KeyW") {
        move(player, "up", 20)
    }
    if(whatkey === "ArrowDown" || "KeyS") {
        move(player,"down", 20)
    }
}

// Code
player.addEventListener("keydown", keypresseddown = true)
player.addEventListener("keydown", whatkey = event.code)
player.addEventListener("keyup", keypresseddown = false)

while(keypresseddown=true)
    playermovement(whatkey)