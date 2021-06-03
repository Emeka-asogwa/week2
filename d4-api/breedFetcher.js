const request = require('request');

const args = process.argv;
const breedName = args[2];
//console.log(breedName);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


request(url, (error, response, body) => {
  // console.log(response.error);
  //  console.log(body);
  // console.log(response);
  // console.log(response.body)
  // console.log(error);
  if (error) {
    console.log(`Error:`,error);
  } else {
    const catObj = JSON.parse(body);

    //console.log(catObj);
     console.log(catObj[0].description);
  }
});

// // console.log(typeof object)