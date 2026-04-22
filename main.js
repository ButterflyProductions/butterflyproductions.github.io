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
    console.log("move activated!")
    console.log(element)
    console.log(direction)
    console.log(distance)
    let rawdirection = direction
    if (direction === "up" || direction === "down") {
        movementdirection = "top"
    }
    else {
        movementdirection = "left"
    }
    let movementdistance = distance;
    console.log(rawdirection)
    console.log(movementdirection)
    console.log(movementdistance)
    if(movementdirection === "up" || movementdirection === "left") {
        distance *= -1
    }
    elementstyle = window.getComputedStyle(element)
    console.log(elementstyle)
    elementstyle.movementdirection = (parseInt(elementstyle.getPropertyValue(movementdirection).replace("px","")) + parseInt(movementdistance)) + "px"
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
}