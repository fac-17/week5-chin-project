const https = require("https");

const myRequest = (url, cb) => {
  https.get(url, (responseFromAPI) => {
    let statusCode = responseFromAPI.statusCode
    let body='';


    responseFromAPI.on('data', (chunk) => {
      body+=chunk;
    })
    responseFromAPI.on('end', () => {
      let responseObj = {};
      responseObj.body=JSON.parse(body);
      console.log(JSON.parse(body))
      responseObj.statusCode=statusCode;
      if(statusCode !== 200)
      {
       cb(new TypeError("StatusCode is not 200, request failed"))
      }
      else
      {
        cb(null, JSON.stringify(responseObj))
      }
    })
  })
}

module.exports=myRequest
