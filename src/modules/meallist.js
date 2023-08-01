class Meallist {
  constructor() {
    this.meallist = [];

    this.meallistElement = document.querySelector('# api-based-webapp');
    this.mealStorageName = 'meallist';
    this.gameId = '';
    this.lblMessage = document.querySelector('#message');
    this.baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
    this.retrieveId();
  }

  saveData() {
    localStorage.setItem(this.mealStorageName, this.gameId);
  }

  retrieveId() {
    this.gameId = localStorage.getItem(this.mealStorageName);
  }

  getMeallist() {
    return this.meallist;
  }

  addMeal(meal) {
    const divMeal = document.createElement('div');
    divMeal.className = 'bg';

    const elName = document.createElement('label');
    const elScore = document.createElement('label');

    elName.textContent = `${meal.name}: `;
    elScore.textContent = `${meal.score}`;

    divMeal.appendChild(elName);
    divMeal.appendChild(elScore);
    this.meallistElement.appendChild(divMeal);
  }

  getMeal = (async (btnRefresh = null) => {
    this.retrieveId();
    this.meallistElement.innerText = '';
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa-spin');
    if (this.gameId === null) this.createGame();
    const response = await fetch(`${this.baseUrl}/filter.php?c=Seafood/${this.gameId}/scores`, {
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

  getMeals = (async (btnRefresh = null) => {
    this.retrieveId();
    this.meallistElement.innerText = '';
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa-spin');
    if (this.gameId === null) this.createGame();
    const response = await fetch(`${this.baseUrl}games/${this.gameId}/scores`, {
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