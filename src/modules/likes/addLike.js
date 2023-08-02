const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hMYaxRWDnnbjDMdtxmy3/likes/';

const addLike = async (idMeal) => {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: idMeal,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    .then(async (response) => {
    const data = await response.json();
    return data;
    });
  };

  export default addLike;