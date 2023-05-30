let hasTooltip = document.querySelectorAll(".has-tooltip");

hasTooltip.forEach((a) => {
    a.insertAdjacentHTML('afterEnd', '<div class="tooltip">' + a.title + '</div>');
});

let tooltip = document.querySelectorAll(".tooltip");
let activeIndex = -1;

hasTooltip.forEach((a, index) => {
    a.addEventListener("click", (event) => {
        event.preventDefault();
        if (activeIndex !== index) {
            if (activeIndex >= 0) {
                tooltip[activeIndex].classList.remove("tooltip_active");
            };
            let coords = a.getBoundingClientRect();
            tooltip[index].style.left = coords.left + "px";
            tooltip[index].style.top = coords.bottom + "px";
            tooltip[index].classList.add("tooltip_active");
            activeIndex = index;
        } else {
            tooltip[index].classList.remove("tooltip_active");
            activeIndex = -1;
        };
    });
});

