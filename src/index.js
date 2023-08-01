import MealList from './modules/meallist.js';
import './style.css';

const mealNew = new MealList();

document.body.onload = () => {
  mealNew.getMeal(null, 52772);
  // if (mealNew.gameId === null) mealNew.createApp();
};