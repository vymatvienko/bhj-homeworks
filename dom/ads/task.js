"use strict"

let rotator = document.querySelectorAll(".rotator");
let currentElementIndex = [];

rotator.forEach((element, index) => {
    currentElementIndex.push(0);
    let rotatorElements = Array.from(element.querySelectorAll(".rotator__case"));
    setInterval(() => {
        rotatorElements[currentElementIndex[index]].classList.remove('rotator__case_active');
        if (currentElementIndex[index] === rotatorElements.length - 1) {
            currentElementIndex[index] = 0;
        } else {
            currentElementIndex[index]++;
        };
        rotatorElements[currentElementIndex[index]].classList.add('rotator__case_active');
    }, 1000);
});