const xhr = new XMLHttpRequest();
const title = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let response = xhr.responseText;
        response = JSON.parse(response);
        let array = Object.values(response.data.answers);
        title.insertAdjacentHTML('beforeend', response.data.title);
        for (let i = 0; i < array.length; i++) {
            answers.insertAdjacentHTML('beforeEnd', '<button class="poll__answer">' + array[i] + '</button>');
        };
        let buttons = [...document.querySelectorAll('.poll__answer')];
        buttons.forEach((a) => {
            a.addEventListener("click", () => {
                alert("Спасибо, ваш голос засчитан!");
            });
        });
    };
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();