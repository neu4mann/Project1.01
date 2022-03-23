//Welcome to the iBackend.Game.
//Players Name

//Start
const start = () => {
  return `TERMINAL<br>>Shall we play a game?<br>>LocalHost:4000<br>Listening on port 4000<br>>NPM Install Express<br>>npm install -g nodemon<br>>Nodemon sever2.js<br>[nodemon] restarting due to changes...<br>>RUN iBackend.Game                                                                                                 <h1><h1><center>**************iBackend.Game*****************</h1><center> iCoders Compile!    <br><br><center>If you answer all of the questions correctly, you can stop iThanos from The iBlip in the ibackEnd.Game! <br>Save half of the earth's population from vanishing, do not let iThanos snap his fingers!<br> Collect as many INFINITY Codes as you can.<br>Know your codes or let your friends die. <br>http://localhost:4000/startnext` 

};

const startnext = () => {    
    return `<br><center>MIND CODE <br><h1></h1><center>iIronman flies up and lands on the hellicarrier and kills a Chitauri lieutenant of Loki's army.<br>
     A tablet is seen in the dead creatures hands. iIronman does an object scan with J.A.R.V.I.S. on the tablet and instantly knows what to do.<br><br>
     To access the tablet for the MIND Code you need to Choose A or B:<br><br>
   <align"left">"function myObject(p1, p2) {<br>
     return p1 * p2;   // The function returns the product of p1 and p2
   }"
   <br>
   A) JS Function.<br>
   B) JS Object <br><br>
   http://localhost:4000/iironman?answer=a<br>
   http://localhost:4000/iironman?answer=b
  '`
  };
      
//iIronman MIND Code
const chooseAnswer1 = (iironman) => {
   if (iironman === "a" || iironman === "A") {
   return 'You choose a! Thats correct! iSpider-man MIND Code. Choose A or B: a) JS Arrays <a href="http://localhost:4000/iironman?answer=a">click here</a><br> b) JS Array Methods <a href="http://localhost:4000/iironman?answer=b">click here</a>';
  } else if (iironman === "b" || iironman === "B") {
    return "You choose b. Incorrect. You did not get the MIND code"
  } else {
    return "You have to enter a or b. Try again.";
  }
};

//iSpider-Man POWER Code
function chooseAnswer2(ispiderman) {
  if (ispiderman === "a" || ispiderman === "A") {
    return 'You choose a! Thats correct! iSpider-Man POWER code. Choose A or B: a) JS Arrays<a href="http://localhost:4000/ispiderman?answera">click here</a><br> b) JS Array Methods <a href="http://localhost:4000/ispiderman?answerb">click here</a>';
  } else if (ispiderman === "b" || ispiderman === "B") {
    return "You choose b. Incorrect. You did not get the POWER code";
  } else {
    return "You have to enter a or b. Try again.";
  }
}

//iHulk REALITY Code
function chooseAnswer3(ihulk) {
  if (ihulk === "a" || ihulk === "A") {
    return 'You choose a! Thats correct! iHulk swings to the top...To acces the tablet for the REALITY code. Choose A or B: a) JS Arrays<a href="http://localhost:4000/wood?quest1=a">click here</a><br> b) JS Array Methods <a href="http://localhost:4000/wood?quest1=b">click here</a>';
  } else if (ihulk === "b" || ihulk === "B") {
    return "You choose b. Incorrect. You did not get the REALITY code";
  } else {
    return "You have to enter a or b. Try again.";
  }
}

//iCaptain America TIME Code
const chooseAnswer4 = (icaptainmerica) => {
  if (icaptainamerica === "a" || icaptainamerica === "A") {
    return 'You choose a! Thats correct! iHulk swings to the top...To acces the tablet for the TIME code. Choose A or B: a) JS Arrays<a href="http://localhost:4000/wood?quest1=a">click here</a><br> b) JS Array Methods <a href="http://localhost:4000/wood?quest1=b">click here</a>';
  } else if (icaptainamerica === "b" || icaptainamerica === "B") {
    return "You choose b. Incorrect. You did not get the TIME code"
  } else {
    return "You have to enter a or b. Try again.";
  }
};

//iThor SPACE Code
const chooseAnswer5 = (ithor) => {
  if (ithor === "a" || ithor === "A") {
    return 'You choose a! Thats correct! iHulk swings to the top...To acces the tablet for the TIME code. Choose A or B: a) JS Arrays<a href="http://localhost:4000/wood?quest1=a">click here</a><br> b) JS Array Methods <a href="http://localhost:4000/wood?quest1=b">click here</a>';
  } else if (ithor === "b" || ithor === "B") {
    return "You choose b. Incorrect. You did not get the TIME code"
  } else {
    return "You have to enter a or b. Try again.";
  }
};

//iDrStrange SOUL Code
const chooseAnswer6 = (idrstrange) => {
  if (idrstrange === "a" || idrstrange === "A") {
    return 'You choose a! Thats correct! iHulk swings to the top...To acces the tablet for the TIME code. Choose A or B: a) JS Arrays<a href="http://localhost:4000/wood?quest1=a">click here</a><br> b) JS Array Methods <a href="http://localhost:4000/wood?quest1=b">click here</a>';
  } else if (idrstrange === "b" || idrstrange === "B") {
    return "You choose b. Incorrect. You did not get the TIME code"
  } else {
    return "You have to enter a or b. Try again.";
  }
};

module.exports = {
  start,
  startnext,
  chooseAnswer1,
  chooseAnswer2,
  chooseAnswer3,
  chooseAnswer4,
  chooseAnswer5,
  chooseAnswer6,
};

//Need Scoring
//need end win or lose
//end 