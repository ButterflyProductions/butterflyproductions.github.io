/* This is first going to be a practice JS Document, before becoming the code for my Spring Unsprung 2026 project.

Project Name: Carousel of a Thousand Dreams
Project Author: ButterflyProductions
Notes: I hope to fucking god this works. 
*/

// Variables
var player = document.getElementById("playerplaceholder");
var gamescreen = document.getElementById("gameplaceholder");

var playerID = "playerplaceholder";
var gameID = "gameplaceholder";

var gamebounds = gamescreen.getBoundingClientRect()

var keypresseddown = false;
var keypressed = ""

// ----------- Functions ----------- //
function move(element, direction, distance) {
    console.log("move activated!")
    let rawdirection = direction
    let movementdirection = direction === "up" || "down" ? "top" : "left";
    let movementdistance = distance;
    console.log(rawdirection)
    console.log(movementdirection)
    console.log(movementdistance)
    if(movementdirection === "up" || "left") {
        distance *= -1
    }
    elementstyle = window.getComputedStyle(element)
    console.log(elementstyle)
    elementstyle.movementdirection = (elementstyle.getPropertyValue(movementdirection).replace("px","") + movementdistance) + "px"
    let elementheight = elementstyle.height.replace("px","")
    let elementwidth = elementstyle.width.replace("px","")
    console.log(elementheight)
    console.log(elementwidth)
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
    console.log(elementstyle.movementdirection)
    requestAnimationFrame(move)
}

// Code
addEventListener("keydown", function keydown(event) {  
    event.preventDefault(); 
    keypresseddown = true
    keypressed = event.code
    console.log(event.code)
    console.log(keypressed)
    console.log(keypresseddown)
})
addEventListener("keyup", function keyup(event) {
    keypresseddown = false
    keypressed = ""
    console.log(keypresseddown)
    console.log(keypressed)
})

if(keypresseddown == true) {
    console.log("it's activated afljakjdklsalkae")
    if(keypresseddown === "ArrowRight" || "KeyD") {
        move(player, "right", 20)
    }
    if(keypresseddown === "ArrowLeft" || "KeyA") {
        move(player, "left", 20)
    }
    if(keypresseddown === "ArrowUp" || "KeyW") {
        move(player, "up", 20)
    }
    if(keypresseddown === "ArrowDown" || "KeyS") {
        move(player,"down", 20)
    }
}