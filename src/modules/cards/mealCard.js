const displayMeals = async () => {
    const request = await fetch('url');
    const response = await request.json();
    const section = document.querySelector('.meals-card');
    response.forEach(async (meal) => {  
      section.innerHTML += `
        <ul id=${meal.id} class="meal-ul">
          <div class="meal-main-info meal-div">
            <img src="${meal.imageId}" class="meal-main-img" alt="${meal.title}" />
          </div>
          <div class="meal-other-info">
            <div class="meal-div">
              <h2 class="meal-title">${meal.title}</h2>
            </div>
          </div>
        </ul>
      `;
    });
  };

  export default displayMeals;