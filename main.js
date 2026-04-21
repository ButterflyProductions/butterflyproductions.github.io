/* This is first going to be a practice JS Document, before becoming the code for my Spring Unsprung 2026 project.

Project Name: Carousel of a Thousand Dreams
Project Author: ButterflyProductions
Notes: I hope to fucking god this works. 
*/

// Variables
var player = document.getElementById("playerplaceholder");
console.log(player)
var gamescreen = document.getElementById("gameplaceholder");
console.log(gamescreen)

var playerID = "playerplaceholder";
var gameID = "gameplaceholder";

var gamebounds = gamescreen.getBoundingClientRect()
console.log(gamebounds)

var keypresseddown = false;
var whatkey

// ----------- Functions ----------- //
function move(element, direction, distance) {
    let rawdirection = direction
    let movementdirection = direction === "up" || "down" ? "top" : "left";
    let movementdistance = distance;
    if(movementdirection === "up" || "left") {
        distance *= -1
    }
    elementstyle = window.getComputedStyle(element)
    console.log(elementstyle)
    console.log (elementstyle.height)
    elementstyle.movementdirection = (elementstyle.getPropertyValue(movementdirection).replace("px","") + movementdistance) + "px"
    let elementheight = elementstyle.height.replace("px","")
    let elementwidth = elementstyle.width.replace("px","")
    if(elementstyle.getPropertyValue(movementdirection).replace("px","") < gamebounds.movementdirection) {
        elementstyle.movementdirection = gamebounds.movementdirection
    }
    if(rawdirection === "down") {
        rawdirection = "bottom"
    }
    if(elementstyle.getPropertyValue(movementdirection).replace("px","") > gamebounds.rawdirection) {
        if(rawdirection === "bottom") {
                    elementstyle.movementdirection = gamebounds.rawdirection - elementheight
        }
        else {
            elementstyle.movementdirection = gamebounds.rawdirection - elementwidth
        }
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
player.addEventListener("keydown", function keydown(event) {
    keypresseddown = true
    whatkey = event.code
})
player.addEventListener("keyup", function keyup(event) {
    keypresseddown = false
})

while(keypresseddown=true)
    playermovement(whatkey)