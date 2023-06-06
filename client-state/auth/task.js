"use strict"

const signInButton = document.getElementById('signin__btn'); 
const signInForm = document.getElementById('signin__form'); 
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if (localStorage.getItem('user')) {
    userId.textContent = localStorage.getItem('user');
    welcome.classList.add('welcome_active');
} else {
    document.forms.signin__form.addEventListener("submit", (event) => {
        event.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            console.log(xhr.status);
            if (xhr.status > 199 && xhr.status < 207) {
                let response = xhr.responseText;
                response = JSON.parse(response);
     
                if (response.success) {
                    userId.textContent = response.user_id;
                    localStorage.setItem('user', response.user_id);
                    welcome.classList.add('welcome_active');
                } else {
                    alert("Неверный логин/пароль");
                }
            } else if (xhr.status = 404) {
                alert("Запрашиваемый ресурс не найден на сервере");
            } else {
                alert("Произошла ошибка на стороне сервера");
            }

        }
    
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    
        const formData = new FormData(document.forms.signin__form);
    
        xhr.send(formData);
    });
};