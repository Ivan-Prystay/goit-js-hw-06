/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.

Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
*/

const validationInputRef = document.querySelector("#validation-input");

validationInputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value.length === +validationInputRef.dataset.length) {
    validationInputRef.addEventListener("blur", () => {
      validationInputRef.classList = "valid";
    });
  } else {
    validationInputRef.addEventListener("blur", () => {
      validationInputRef.classList = "invalid";
    });
  }
});
