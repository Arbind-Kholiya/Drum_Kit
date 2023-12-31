//for mouse click

var n = document.querySelectorAll(".drum").length;
for(var i = 0; i < n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        
        var buttonInner =this.innerHTML;
        playSound(buttonInner);
        activeButton(buttonInner);
    });
}


//for keyboard press

document.addEventListener("keypress" , function(event){
    playSound(event.key);
    activeButton(event.key);
})



function playSound(key){
    switch(key){
        case"w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case"a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case"s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case"d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case"j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case"k":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;
        case"l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
        default:console.log(buttonInner);
    }
}


function activeButton(currentElement){
    var currentButton = document.querySelector("." + currentElement);
    currentButton.classList.add("pressed");

    setTimeout(function(){
        currentButton.classList.remove("pressed");

    },100);
}