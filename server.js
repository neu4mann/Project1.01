// Express 
const express = require("express");
const path = require("path");


// Start,Questions 1-5 link Server.js side
const {
    start,
    chooseAnswer1
    // chooseAnswer2
    // chooseAnswer3
    // chooseAnswer4
    // chooseAnswer5

} = require("./game2.js");

//Server http://localhost:4000
const app = express();
const PORT = 4000;

app.listen(PORT, function () {
  console.log("Listening on port", PORT);
});


//welcome page
app.get("/start", (req, res) => {
    let startmsg = start();
    res.send(startmsg)
  });

//Question1
app.get("/ironman", (req, res) => {
    let ironman = req.query.ironman;
    let answer = chooseAnswer1(ironman);
    res.send(answer);
  });


  //Question2
  //Question3
  //Question4
  //Question5
  //Question6

