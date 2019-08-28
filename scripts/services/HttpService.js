const RESULT_SUCCESS_CODE = 200;

export const HttpService = {
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
