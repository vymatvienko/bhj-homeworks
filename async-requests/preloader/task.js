const xhr = new XMLHttpRequest();
const img = document.getElementById("loader");
const items = document.getElementById("items");

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let response = xhr.responseText;
        response = JSON.parse(response);
        let array = Object.values(response.response.Valute);
        
        for (let i = 0; i < array.length; i++) {
            items.insertAdjacentHTML('beforeEnd', '<div class="item"><div class="item__code">' + array[i].CharCode + '</div><div class="item__value">' + array[i].Value + '</div><div class="item__currency">' + 'руб.' + '</div></div>')
        };
        img.classList.remove("loader_active");
    };
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();