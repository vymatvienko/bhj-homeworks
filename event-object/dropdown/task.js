"use strict"

let dropdownList = document.querySelectorAll(".dropdown__list");
let dropdownValues = document.querySelectorAll(".dropdown__value");
let dropdownLink = document.querySelectorAll(".dropdown__link");

dropdownLink.forEach ((dropdownItem) => {
    dropdownItem.addEventListener ("click", () => {
        event.preventDefault();
        dropdownItem.closest(".dropdown").children[0].textContent = dropdownItem.textContent;
        dropdownItem.closest(".dropdown__list").classList.remove("dropdown__list_active");
    });
});

dropdownValues.forEach ( dropdownValue => {
    dropdownValue.addEventListener ("click", () => {
        dropdownValue.closest(".dropdown").children[1].classList.toggle("dropdown__list_active");
    });
});

