/*
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
*/

const inputFontSizeRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");
textRef.style.fontSize = `${inputFontSizeRef.value}px`;

inputFontSizeRef.addEventListener("input", (event) => {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
});
