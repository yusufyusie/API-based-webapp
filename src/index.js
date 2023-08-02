import MealList from './modules/mealPopup.js';
import './style.css';

document.body.onload = () => {
  const mealNew = new MealList(52772);
  mealNew.getMeal(null);
  // if (mealNew.gameId === null) mealNew.createApp();
};