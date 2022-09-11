/*
Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/

const counterValueRef = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue /*.toString()*/;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue /*.toString()*/;
});
