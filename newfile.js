var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
    .on('error', (err) => {
        throw err; 
    })
    .on('response', (response) =>{
        console.log("Response Status Code is :", response.statusCode);
        console.log("Repsonse Message is :", response.statusMessage);
        console.log("Response content Type is :", response.headers['content-type'])
    })
    .on('end', () => {
        console.log("Download is completed");
    })
    .pipe(fs.createWriteStream('./future.jpg'))
    .on('close', () => console.log('Closed the file'))
    ;
        