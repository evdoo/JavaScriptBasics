document.body.style.background = prompt("Какой будет фон у страницы?");

const page = document.querySelector(".page");
page.style.color = prompt("Какой будет цвет текста на странице?");

const name = document.querySelector(".name");
console.log(name);
name.innerHTML = prompt("Как зовут человека, который вас вдохновляет?");

const image = document.querySelector('img');
const url = prompt("Введите адрес картинки");
image.setAttribute("src", url);

const shortBio = document.querySelector(".shortBio");
shortBio.innerHTML = prompt("Введите текст страницы");
shortBio.className += " animated";