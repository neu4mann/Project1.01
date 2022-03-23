//express
const express = require("express");
const path = require("path");

const {
    start,
    startnext,
    chooseAnswer1,
    chooseAnswer2,
    chooseAnswer3,
    chooseAnswer4,
    chooseAnswer5,
    chooseAnswer6,
    choose

} = require("./game2");

//server
const app = express();
const PORT = 4000;

app.listen(PORT, function () {
  console.log("Listening on port", PORT);
});

//start 
app.get("/start", (req, res) => {
    let startmsg = start(start);
    res.send(startmsg); 
    console.log(start)   
  });

//startnext
app.get("/startnext", (req, res) => {  
    let answer = startnext(startnext);
    res.send(answer);
    
    });

//iironman
app.get("/iironman", (req, res) => {
    let iironman = req.query.iironman;
    let answer = chooseAnswer1(iironman);
    res.send(answer);
  });

//ispiderman
  app.get("/ispiderman", (req, res) => {
    let ispiderman = req.query.ispiderman;
    let answer = chooseAnswer2(ispiderman);
    res.send(answer);
  }); 
  
//ihulk
  app.get("/ihulk", (req, res) => {
    let ihulk = req.query.ihulk;
    let answer = chooseAnswer3(ihulk);
    res.send(answer);
  });
 
//icaptainamerica
  app.get("/icaptainamerica", (req, res) => {
    let icaptainamerica = req.query.icaptainamerica;
    let answer = chooseAnswer4(icaptainamerica);
    res.send(answer);
  });

//ithor
  app.get("/ithor", (req, res) => {
    let ithor = req.query.ithor;
    let answer = chooseAnswer5(ithor);
    res.send(answer);
  });

//idrstrange
  app.get("/idrstrange", (req, res) => {
    let idrstrange = req.query.idrstrange;
    let answer = chooseAnswer6(idrstrange);
    res.send(answer);
  });

