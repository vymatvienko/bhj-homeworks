"use strict"

let tab = document.querySelectorAll(".tab");
let tabContent = document.querySelectorAll(".tab__content");
let activeTab = 0;

tab.forEach ((a, index) => {
    a.addEventListener ("click", () => {
        if (activeTab !== index) {
            tab[activeTab].classList.remove("tab_active");
            tabContent[activeTab].classList.remove("tab__content_active");
            a.classList.add("tab_active");
            tabContent[index].classList.add("tab__content_active");
            activeTab = index;
        };
    });
});
