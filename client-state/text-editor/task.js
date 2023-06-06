const editor = document.getElementById('editor');
const button = document.querySelector('.button');

editor.value = localStorage.getItem('editor');
editor.addEventListener('input', () => {
localStorage.setItem('editor', editor.value);
});

button.addEventListener('click', () => {
localStorage.removeItem('editor');
editor.value = '';
});