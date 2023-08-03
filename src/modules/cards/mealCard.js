import like from '../likes/heart.svg';
import addLike from '../likes/addLike.js';

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
likeUl.innerHTML = `<span class='hide'>${id}</span><ul class="stop">${likeNum}</ul><p class="stop">Likes</p>`;

strUl.appendChild(likeUl);
ul.appendChild(strUl);
ul.appendChild(buttonUl);
board.appendChild(ul);

likeUl.addEventListener('click', (e) => {
  if (e.target.classList.contains('stop')) {
    return;
  }

  addLike(e.target.previousElementSibling.textContent);
  const sumlike = e.target.nextElementSibling.textContent;
  e.target.nextElementSibling.textContent = parseInt(sumlike, 10) + 1;
});
};

export default mealCard;