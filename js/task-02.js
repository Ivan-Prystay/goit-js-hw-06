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

const ingridientRef = ingredients.map((ingredient) => {
  const liRef = document.createElement("li");
  liRef.classList = "item";
  liRef.textContent = ingredient;
  return liRef;
});

ingredientsListRef.append(...ingridientRef);
console.log("ingredientsListRef: ", ingredientsListRef);
