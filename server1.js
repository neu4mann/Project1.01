
// //
// const readlineSync = require("readline-sync");
// let answer = readlineSync.question("What is your name? ");
// console.log(Hello, answer);


const express = require("express");
const app = express();
const PORT = 4000;

// const path = require("path");

// const {} = require()

app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
    console.log("Listening on port", PORT);
});

//test server send
app.get('/start' (request, response) => {
    response.send('Hello world!')
});



