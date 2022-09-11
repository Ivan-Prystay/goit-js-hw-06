const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

/*
Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients. 

*/
const ingredientsListRef = document.querySelector("#ingredients");
const ingridientRef = [];

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.classList = "item";
  li.textContent = ingredient;
  return ingridientRef.push(li);
});

ingredientsListRef.append(...ingridientRef);
console.log("ingredientsListRef: ", ingredientsListRef);
