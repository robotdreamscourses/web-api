// Web APIs
// https://developer.mozilla.org/en-US/docs/Web/API

// Geolocation
const onSuccess = (position) => {
  console.log(position, 'success');
};

const onError = (error) => {
  console.log(error, 'error');
};

window.navigator.geolocation.getCurrentPosition( onSuccess, onError );


// fetch

const getData = async () => {
// const url = 'https://dog.ceo/api/breeds/image/random';
  const url = 'https://dog.ceo/api/breeds/list/all';

  let data = await fetch(url).then((response) => {
    return response.json()
  }).catch((error) => {
    console.log(error);
  }).finally(() => {
    console.log('finally');
  });

  console.log(data, 'dog response');
}

getData();

// async await

const getCatData = async () => {

  const url = 'https://api.thecatapi.com/v1/images/search?limit=10';

  let data = await fetch(url).then((response) => {
    return response.json()
  }).catch((error) => {
    console.log(error);
  }).finally(() => {
    console.log('finally');
  });

  console.log(data, 'Cat response');
}

getCatData();



