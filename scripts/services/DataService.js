const RESULT_SUCCESS_CODE = 200;
const RESULTS_QUANTITY = 10;
const COINS_URL = 'https://api.coinpaprika.com/v1/coins';
const getSingleCoinUrl = coinId => `${COINS_URL}/${coinId}/ohlcv/latest`;

const HttpService = {
  setRequest(url, callback, method = 'GET') {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status !== RESULT_SUCCESS_CODE) {
        console.log('Oops...');
      } else {
        const responseData = JSON.parse(xhr.response);
        callback(responseData);
      }
    };
  },

  setMultipleRequests(urls, callback) {
    let resultsCounter = urls.length;
    let results = [];

    urls.forEach(url => {
      HttpService.setRequest(url, data => {
        results.push({ url, data });
        resultsCounter--;

        if (!resultsCounter) {
          callback(results);
        }
      });
    })
  }
}

export const DataService = {
  getCurrencies(callback) {
    HttpService.setRequest(COINS_URL, data => {
      data = data.slice(0, RESULTS_QUANTITY);
      DataService.getCoinsPrice(data, callback);
    });
  },

  getCoinsPrice(data, callback) {
    const coinsPriceUrls = data.map(item => getSingleCoinUrl(item.id));

    HttpService.setMultipleRequests(coinsPriceUrls, coins => {
      const fullData = data.map(coinData => {
        let coinPriceUrl = getSingleCoinUrl(coinData.id);
        let [coindPriceData] = coins.find(coin => coin.url === coinPriceUrl).data;

        coinData.price = coindPriceData.close.toFixed(2);
        return coinData;
      });

      callback(fullData);
    })
  }
};
