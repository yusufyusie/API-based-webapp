// eslint-disable-next-line import/no-extraneous-dependencies
import Toastify from 'toastify-js';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'toastify-js/src/toastify.css';

class MealPopup {
  constructor(mealId) {
    this.mealId = mealId;

    this.modal = document.querySelector('.modal');
    this.commentList = document.querySelector('.comment-list');
    this.commentForm = document.querySelector('.comment-form');
    this.list = document.querySelector('.comment-list');
    this.mealAppIdName = 'meallist';
    this.appId = '';
    this.lblMessage = document.querySelector('#message');
    this.baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
    this.baseUrlInvolve = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    this.retrieveId();
    this.commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('comment-name');
      const insight = document.getElementById('comment-insight');
      const button = document.getElementById('comment-button');
      this.addComment(button, username.value, insight.value);
    });
  }

  saveData() {
    localStorage.setItem(this.mealAppIdName, this.appId);
  }

  retrieveId() {
    this.appId = localStorage.getItem(this.mealAppIdName);
    if (this.appId === null) this.createApp();
  }

  getMeallist() {
    return this.meallist;
  }

  createApp = (async () => {
    const response = await fetch(`${this.baseUrlInvolve}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/text',
      },
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
    });
    this.appId = await response.text();
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

  showComment(comment) {
    const li = document.createElement('li');
    const elName = document.createElement('label');
    const elComment = document.createElement('label');
    const elTime = document.createElement('label');

    elName.textContent = `${comment.username}: `;
    elComment.textContent = `${comment.comment}`;
    elTime.textContent = `${comment.creation_date} `;

    li.appendChild(elTime);
    li.appendChild(elName);
    li.appendChild(elComment);
    this.list.appendChild(li);
  }

  getMeal = (async (btnRefresh = null) => {
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa fa-spin fa-spinner');
    const response = await fetch(`${this.baseUrl}lookup.php?i=${this.mealId}`, {
      method: 'get',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
    });
    const meal = await response.json();
    if (meal.message) {
      this.lblMessage.textContent = meal.message;
    } else {
      this.showMeal(meal.meals[0]);
      this.getComments();
    }
    if (btnRefresh !== null) btnRefresh.childNodes[2].classList.toggle('fa fa-spin fa-spinner');
  });

  addComment = (async (btnRefresh = null, username, comment) => {
    if (btnRefresh !== null) btnRefresh.childNodes[0].className = ('fa fa-spin fa-spinner');
    const commentObject = {
        item_id: this.mealId,
        username,
        comment,
      };
    const response = await fetch(`${this.baseUrlInvolve}${this.appId}/comments`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      body: JSON.stringify(commentObject),
    });
    const result = await response.text();
    console.log(result);
    if (result.error) {
      Toastify({
        text: result.error.message,
        className: 'info',
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();
    } else {
      Toastify({
        text: result,
        className: 'info',
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();
      // this.showComment(commentObject);
      this.getComments();
    }
    if (btnRefresh !== null) btnRefresh.childNodes[0].className = '';
  });

  getComments = (async (btnRefresh = null) => {
    this.list.innerText = '';
    if (btnRefresh !== null) btnRefresh.childNodes[0].className = ('fa fa-spin fa-spinner');
    const url = `${this.baseUrlInvolve + this.appId}/comments?item_id=${this.mealId}`;
    const response = await fetch(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
    });
    const comments = await response.json();
    if (comments.error) {
      console.log(comments.error);
      Toastify({
        text: comments.error.message,
        className: 'info',
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();
    } else {
      console.log(comments);
      if (comments !== undefined) {
        comments.forEach((element) => {
          console.log(element);
          this.showComment(element);
        });
      }
    }
    if (btnRefresh !== null) btnRefresh.childNodes[0].className = '';
  });
}

export default MealPopup;