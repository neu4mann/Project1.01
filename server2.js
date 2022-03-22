//js 
const express = require("express");
const path = require("path");

const {
    start,
    chooseAnswer1
} = require("./game2.js");

const app = express();
const PORT = 4000;

app.listen(PORT, function () {
  console.log("Listening on port", PORT);
});

app.get("/start", (req, res) => {
    let startmsg = start();
    res.send(startmsg)
  });

app.get("/ironman", (req, res) => {
    let ironman = req.query.ironman;
    let answer = chooseAnswer1(ironman);
    res.send(answer);
  });