const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// ingredients.forEach((ingredient) => {
//   listItem.textContent = ingredient;
// });
const unnumberedList = document.querySelector('#ingredients');

const ingredientsEl = ingredients.map((ingredient) => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;
  return listItem;
});
unnumberedList.append(...ingredientsEl);
console.log(ingredientsEl);