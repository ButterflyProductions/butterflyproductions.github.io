/* This is first going to be a practice JS Document, before becoming the code for my Spring Unsprung 2026 project.

Project Name: Carousel of a Thousand Dreams
Project Author: ButterflyProductions
Notes: I hope to fucking god this works. 
*/

// Variables
var player = document.getElementById("playerplaceholder");
var gamescreen = document.getElementById("gameplaceholder");
console.log(gamescreen)

var playerID = "playerplaceholder";
var gameID = "gameplaceholder";

var gamebounds = gamescreen.getBoundingClientRect()
console.log(gamebounds)

var keypresseddown = false;
var keypressed = ""

// Code
addEventListener("keydown", function keydown(event) {  
    event.preventDefault(); 
    keypressed = event.code
    console.log(event.code)
    console.log(keypressed)
    if(keypressed === "ArrowRight" || keypressed === "KeyD") {
        move(player, "right", 20)
    }
    if(keypressed === "ArrowLeft" || keypressed === "KeyA") {
        move(player, "left", 20)
    }
    if(keypressed === "ArrowUp" || keypressed === "KeyW") {
        move(player, "up", 20)
    }
    if(keypressed === "ArrowDown" || keypressed === "KeyS") {
        move(player,"down", 20)
    }
})
addEventListener("keyup", function keyup(event) {
    keypressed = ""
    console.log(keypressed)
})


function move(element, direction, distance) {
    let rawdirection = direction
    if (direction === "up" || direction === "down") {
        movementdirection = "top"
    }
    else {
        movementdirection = "left"
    }
    let movementdistance = distance;
    if(movementdirection === "up" || movementdirection === "left") {
        distance *= -1
    }
    elementstyle = window.getComputedStyle(element)
    console.log(elementstyle)
    elementstyle.movementdirection = (parseInt(elementstyle.getPropertyValue(movementdirection).replace("px","")) + parseInt(movementdistance)) + "px"
    console.log(elementstyle.movementdirection)
    console.log(elementstyle.getPropertyValue(movementdistance))
    let elementheight = elementstyle.height.replace("px","")
    let elementwidth = elementstyle.width.replace("px","")
 /*   if(elementstyle.getPropertyValue(movementdirection).replace("px","") < gamebounds.movementdirection) {
        elementstyle.movementdirection.setPropertyValue(gamebounds.movementdirection)
        console.log(elementstyle.movementdirection)
    }
    if(rawdirection === "down") {
        rawdirection = "bottom"
    }
    if(elementstyle.getPropertyValue(movementdirection).replace("px","") > gamebounds.rawdirection) {
        if(rawdirection === "bottom") {
                    elementstyle.movementdirection.setPropertyValue(gamebounds.rawdirection - elementheight)
                    console.log(elementstyle.movementdirection)
        }
        else {
            elementstyle.movementdirection.setPropertyValue(gamebounds.rawdirection - elementwidth)
            console.log(elementstyle.movementdirection)
        }
    }
    console.log(elementstyle.top)
    console.log(elementstyle.left) */
    requestAnimationFrame(move)
}