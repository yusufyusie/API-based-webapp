import MealList from './modules/meallist.js';
import './style.css';

const form = document.querySelector('form');
const btnRefresh = document.querySelector('#btnRefresh');
const mealNew = new MealList();

document.body.onload = () => {
  if (mealNew.gameId === null) mealNew.createGame();
};

//  add an event listener to the refresh button
btnRefresh.addEventListener('click', () => {
  mealNew.getGames(btnRefresh);
});

//  add an event listener to the form submit button
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const score = document.querySelector('#score').value;
  if (name !== '') {
    const meal = {
      name,
      score,
    };
    mealNew.postScore(meal);
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }
});