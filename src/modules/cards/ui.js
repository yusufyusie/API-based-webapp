import displayMeals from './getMeals.js';
import mealCard from './mealCard.js';

const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const mealUI = async () => {
  const request = await fetch(URL);
  const likes = await request.json();

  const data = await displayMeals();
  data.meals.forEach((meal) => {
    let likeNum = 0;
    likes.forEach((item) => {
      if (item.item_id === meal.idMeal) {
        likeNum = item.likes;
      }
    });
    mealCard(meal.strMeal, meal.idMeal, meal.strMealThumb, likeNum, meal.strTags);
  });
};

export default mealUI;