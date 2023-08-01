const mealCard = (title, id, imageId, likeNum) => {
const board = document.querySelector('.meals-card');

const ul = document.createElement('ul');
ul.className = 'mealItem';
const strUl = document.createElement('ul');
strUl.className = 'strUl';
const likeUl = document.createElement('ul');
likeUl.className = 'likeUl';
const buttonUl = document.createElement('ul');
buttonUl.className = 'buttonUl';

const buttonComment = document.createElement('ul');
buttonComment.className = 'button';

ul.innerHTML = `<img class='thumb' src='${imageId}'>`;
strUl.innerHTML = `<span>${title}</span>`;
likeUl.innerHTML = `<span class='hide'>${id}</span><ul class="stop">${likeNum}</ul><p class="stop">Likes</p>`;
buttonComment.innerHTML = `<div>Comments</div><span class='hide'>${id}</span>`;

strUl.appendChild(likeUl);
ul.appendChild(strUl);
buttonUl.appendChild(buttonComment);
ul.appendChild(buttonUl);
board.appendChild(ul);
};

  export default mealCard;