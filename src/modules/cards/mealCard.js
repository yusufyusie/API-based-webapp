import displayMeals from './getMeals.js';

const mealCard = (title, id, imageId) => {
const board = document.querySelector('.meals-card');

const ul = document.createElement('ul');
ul.className = 'mealItem';
const strUl = document.createElement('ul');
strUl.className = 'strUl';

ul.innerHTML = `<img class='thumb' src='${imageId}'>`;
strUl.innerHTML = `<span>${title}</span>`;

ul.appendChild(strUl);
board.appendChild(ul);
};

const data = await displayMeals();
  data.meals.forEach((meal) => {
    mealCard(meal.strMeal, meal.idMeal, meal.strMealThumb);
  });

  export default mealCard;