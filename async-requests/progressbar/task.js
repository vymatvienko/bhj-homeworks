const progress = document.getElementById('progress');

document.forms.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = (e) => {
        progress.value = (e.loaded / e.total * 10).toFixed(1);
    };
    xhr.upload.onload = () => {
        alert("Файл успешно загружен");
    };
    xhr.upload.onerror = () => {
        alert("Произошла ошибка при загрузки файла");
    };
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(document.forms.form);

    xhr.send(formData);
});
