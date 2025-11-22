const btn = document.querySelector('#btn');
const form = document.querySelector('#myForm');
const input = document.querySelector('#textInput');
const output = document.querySelector('#out');
const container = document.querySelector('#container');
const items = document.querySelectorAll('.item');

btn.addEventListener('click', () => {
    alert('Кнопка нажата!');
});
input.addEventListener('input', () => {
    output.textContent = 'Вы ввели: ' + input.value;
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Форма отправлена, но страница не перезагружена!');
    alert('Форма обработана через JS');
});
container.addEventListener('click', (event) => {
    if (event.target.classList.contains('item')) {
        alert('Вы нажали: ' + event.target.textContent);
    }
});
