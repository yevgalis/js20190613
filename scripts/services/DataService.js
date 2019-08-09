const COINS_URL = 'https://api.coinpaprika.com/v1/coins';
const RESULT_SUCCESS = 200;

export const DataService = {
  getCurrencies(callback) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', COINS_URL);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status !== RESULT_SUCCESS) {
        console.log('Oops...');
      } else {
        const responseData = JSON.parse(xhr.response).slice(0, 10);
        callback(responseData);
      }
    };
  }
}
