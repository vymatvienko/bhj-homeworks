"use strict"

let reveal = document.querySelectorAll('.reveal');

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();
    if (bottom < 0) {
        return false;
    }

    if (top > window.innerHeight) {
        return false;
    }
    return true;
}

reveal.forEach((a) => {
    document.addEventListener("scroll", function() {
        if (isVisible(a)) {
            a.classList.add("reveal_active");
        };
    });
});