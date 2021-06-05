const request = require('request');
request('http://www.example.edu', (error,response, body) => {
  console.log('error: ', error);
  console.log('statusCode: ', response && response.statusCode);
  console.log('body: ',body);
});