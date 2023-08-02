import like from '../likes/heart.svg';
import displayMeals from './getMeals.js';

const myLike = new Image();
myLike.src = like;
myLike.classList = 'imgLike';

const mealCard = (title, id, imageId, likeNum) => {
const board = document.querySelector('.meals-card');

const ul = document.createElement('ul');
ul.className = 'mealItem';

const strUl = document.createElement('ul');
strUl.className = 'strUl';

const likeUl = document.createElement('ul');
likeUl.className = 'likeDiv';

const buttonUl = document.createElement('ul');
buttonUl.className = 'buttonDiv';

ul.innerHTML = `<img class='thumb' src='${imageId}'>`;
strUl.innerHTML = `<span>${title}</span>`;
likeUl.innerHTML = `<span class='hide'>${id}</span><img class='imgLike' src='${like}'><ul class="stop">${likeNum}</ul><p class="stop">Likes</p>`;

strUl.appendChild(likeUl);
ul.appendChild(strUl);
ul.appendChild(buttonUl);
board.appendChild(ul);
};

const data = await displayMeals();
  data.meals.forEach((meal) => {
    mealCard(meal.strMeal, meal.idMeal, meal.strMealThumb);
  });

  export default mealCard;