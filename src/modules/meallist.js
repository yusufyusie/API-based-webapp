class Meallist {
  constructor() {
    this.meallist = [];

    this.meallistElement = document.querySelector('#api-based-webapp');
    this.modal = document.querySelector('.modal');
    this.mealStorageName = 'meallist';
    this.appId = '';
    this.lblMessage = document.querySelector('#message');
    this.baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
    this.baseUrlInvolve = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    this.retrieveId();
  }

  saveData() {
    localStorage.setItem(this.mealStorageName, this.appId);
  }

  retrieveId() {
    this.appId = localStorage.getItem(this.mealStorageName);
    if (this.appId === null) this.createApp();
  }

  getMeallist() {
    return this.meallist;
  }

  createApp = (async () => {
    const response = await fetch(`${this.baseUrlInvolve}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
    });
    this.appId = response.text;
    this.saveData();
  })

  showMeal(meal) {
    this.modal.classList.toggle('show');
    const itemTitle = document.querySelector('#itemTitle');
    const itemImage = document.querySelector('#itemImage');
    const tags = document.querySelector('#tags');
    const youtube = document.querySelector('#youtube');
    const category = document.querySelector('#category');
    const area = document.querySelector('#area');
    const instruction = document.querySelector('.instruction');
    const ingredients = document.querySelector('.ingredients');
    itemTitle.textContent = meal.strMeal;
    tags.textContent = meal.strTags;
    youtube.href = meal.strYoutube;
    itemImage.src = meal.strMealThumb;
    instruction.textContent = meal.strInstructions;
    category.textContent = meal.strCategory;
    area.textContent = meal.strArea;

    for (let i = 0; i < 20; i += 1) {
      const ing = meal[`strIngredient${i + 1}`];
      if (ing !== '' && ing !== null) {
        const li = document.createElement('li');
        li.className = 'ingredient';
        li.textContent = ing;
        ingredients.appendChild(li);
      }
    }
  }

  getMeal = (async (btnRefresh = null, mealId) => {
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa-spin');
    const response = await fetch(`${this.baseUrl}lookup.php?i=${mealId}`, {
      method: 'get',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
    });
    const meal = await response.json();
    console.log(meal.meals[0]);
    if (meal.message) {
      this.lblMessage.textContent = meal.message;
    } else {
      this.showMeal(meal.meals[0]);
    }
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa-spin');
  });

  getMeals = (async (btnRefresh = null) => {
    this.retrieveId();
    this.meallistElement.innerText = '';
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa-spin');
    if (this.appId === null) this.createGame();
    const response = await fetch(`${this.baseUrl}games/${this.appId}/scores`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
    });
    const games = await response.json();
    if (games.message) {
      this.lblMessage.textContent = games.message;
    } else if (games.result) {
      games.result.forEach((x) => {
        this.addMeal(
          {
            name: x.user,
            score: x.score,
          },
        );
      });
    }
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa-spin');
  });
}

export default Meallist;