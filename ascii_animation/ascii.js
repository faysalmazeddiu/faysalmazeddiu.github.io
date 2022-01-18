"use strict";

window.onload = function() {

    let timerId = null;
    let frameId = -1;
    let initialTextValue = "";
    let speed = 250;

    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let textBox = document.getElementById("text-area");

    let animation = document.getElementById("animation");
    let fonts = document.getElementById("fontsize");

    let turbo = document.getElementById("turbo");

    turbo.onclick = function() {
        if (turbo.checked) speed = 50;
        else speed = 250;
    }

    fonts.onchange = function() {
        textBox.className = fonts.value;
    }

    animation.onchange = function() {
        textBox.value = ANIMATIONS[animation.value];
    }

    start.onclick = function() {

        if (!timerId) {
            stop.disabled = false;
            start.disabled = true;

            let anim = document.getElementById("text-area").value;
            initialTextValue = anim;

            let frames = anim.split("=====\n");
            timerId = setInterval(playAnimation, speed, frames);
        }
    }

    stop.onclick = function() {
        stop.disabled = true;
        start.disabled = false;

        if (timerId) clearInterval(timerId);
        timerId = null;

        frameId = -1;
        textBox.value = initialTextValue;
    }

    const playAnimation = function(frames) {
        if (frameId == -1 || frameId >= frames.length) frameId = 0;
        textBox.value = frames[frameId];
        frameId++;
    }

}