const RESULT_SUCCESS_CODE = 200;
const RESULTS_QUANTITY = 10;
const COINS_URL = 'https://api.coinpaprika.com/v1/coins';
const getSingleCoinUrl = coinId => `${COINS_URL}/${coinId}/ohlcv/latest`;

const HttpService = {
  setRequest(url, method = 'GET') {
    return new Promise(resolve => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.send();

      xhr.onload = () => {
        if (xhr.status !== RESULT_SUCCESS_CODE) {
          console.log('Oops...something went wrong!');
        } else {
          const responseData = JSON.parse(xhr.response);
          resolve(responseData);
        }
      };
    })
  },

  setMultipleRequests(urls) {
    const requests = urls.map(url => HttpService.setRequest(url));
    return Promise.all(requests);
  }
}

export const DataService = {
  getCurrencies() {
    return HttpService.setRequest(COINS_URL)
      .then(data => {
        data = data.slice(0, RESULTS_QUANTITY);
        return DataService.getCoinsPrice(data);
      });
  },

  getCoinsPrice(data) {
    const coinsPriceUrls = data.map(item => getSingleCoinUrl(item.id));

    return HttpService.setMultipleRequests(coinsPriceUrls)
      .then(coins => {
        const fullData = data.map((item, index) => {
          item.price = coins[index][0].close;
          return item;
        });

        return fullData;
      })
  }
};
