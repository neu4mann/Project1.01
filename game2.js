//Welcome to the iBackend.Game.
//Players Name

//Start
const start = () => {
  return `TERMINAL<br>>Shall we play a game?<br>>LocalHost:4000<br>Listening on port 4000<br>>NPM Install Express<br>>npm install -g nodemon<br>>Nodemon sever2.js<br>[nodemon] restarting due to changes...<br>>RUN iBackend.Game                                                                                                 <h1><h1><center>**************iBackend.Game*****************</h1><center> iCoders Compile!    <br><br><center>If you answer all of the questions correctly, you can stop iThanos from The iBlip in the ibackEnd.Game! <br>Save half of the earth's population from vanishing, do not let iThanos snap his fingers!<br> Collect as many INFINITY Codes as you can.<br>Know your codes or let your friends die. <br>http://localhost:4000/startnext` 
};



//Scoring
// const gameState = {
//   score: 0,
//   name: "",
// };

//Startnext.iiron.q1.MIND
const startnext = () => {   
    return `<br><center>MIND CODE <br><h1></h1><center>1.iIronman flies up and lands on the hellicarrier and kills a Chitauri lieutenant of Loki's army.<br>
     A tablet is seen in the dead creatures hands. iIronman does an object scan with J.A.R.V.I.S. on the tablet and instantly knows what to do.<br><br>
     To access the tablet for the MIND Code you need to Choose A or B:<br><br>
   <align"left">"function myObject(p1, p2) {<br>
     return p1 * p2;   // The function returns the product of p1 and p2
   }"
   <br>
   A) JS Function.<br>
   B) JS Object <br><br>
   http://localhost:4000/iironman?iironman=a<br>
   http://localhost:4000/iironman?iironman=b` 
  };
      
//A.1.Iron.ISpiderman-POWER-CODE.Q2
const chooseAnswer1 = (iironman) => {
   if (iironman === "a" || iironman === "A") {
   return 'You choose a! Thats correct! iIronman havs secured a code. You have [1.MIND]<br>.<br>2.Spider-Man swings to the top of the Avengers tower building where the portal machine is powering up.<br>He sees a tablet laying by the portal machine. Swoooosh-ppppffffft goes the web as iSpider-man fishes the tablet with his wrist webbing. <br>The iSpidey sense tingle.<br><br>To access the tablet for the POWER Code. Choose A or B:<br>const cars = ["Saab", "Volvo", "BMW"];<br><br> a) JS Arrays <a href="http://localhost:4000/ispiderman?ispiderman=a">click here</a><br> b) JS Array Methods <a href="http://localhost:4000/spiderman?ispiderman=b">click here</a>';
  } else if (iironman === "b" || iironman === "B") {
    return "You choose b. Incorrect. iIronman not get the MIND code. <br>iThanos SNAPS his fingers<br>.<br>Half of the people around you begin to disappear<br>Restart the game<br>http://localhost:4000/start"
  }
};

//A.2.Spider-.iHulk-REALITY-CODE.Q3
const chooseAnswer2 = (ispiderman) => {
  if (ispiderman === "a" || ispiderman === "A") {
    return 'You choose a! Thats correct! iSpiderman has secured a code. You have [1.MIND]--Add->[2.POWER].<br>.<br>3.iHulk jumps up to the top of iTony Starks building smashing through the balcony glass landing on Loki.<br>Loki is knocked unconscious and drops his tablet.<br>The inner iDavid Banner senses the importance of the tablet.<br>.<br>To access the tablet for the REALITY Code. Choose A or B:<br><br>Tablet shows:<br>let x = 5;         // assign the value 5 to x<br>let y = 2;         // assign the value 2 to y<br>let z = x + y;     // assign the value 7 to z (5 + 2)<br>.<br>A) JS Operators.<a href="http://localhost:4000/ihulk?ihulk=a">click here</a><br>B) JS Arithmetic <a href="http://localhost:4000/ihulk?iihulk=b">click here</a>';
  } else if (ispiderman === "b" || ispiderman === "B") {
    return "You choose b. Incorrect. iSpider-man did not get the POWER code. <br>iThanos SNAPS his fingers<br>.<br>Half of the people around you begin to disappear<br>Restart the game<br>http://localhost:4000/start";
  } else {
    return "You have to enter a or b. Try again.";
  }
};

//A.3.iHulk.iCaptainAmerica.TIME-CODE.Q4
const chooseAnswer3 = (ihulk) => {
  if (ihulk === "a" || ihulk === "A") {
    return `You choose a! Thats correct! iHulk has secured a code. You have [1.MIND][2.POWER]--Add->[3.REALITY]<br>.<br>4.iCaptain America frisbees his shield and beheads some bad guy. Cool! Give me more of that violence.<br>iCaptain America see's a tablet in the knapsack of the headless corpse. Make CODE great again!<br>.<br>To access the tablet for the TIME Code. Choose A or B:<br>.<br> \< element event="some JavaScript" \><br><br> a) JS Events.<a href="http://localhost:4000/icaptainamerica?icaptainamerica=a">click here</a><br> b) JS Strings <a href="http://localhost:4000/icaptainamerica?icaptainamerica=b">click here</a>;`
  } else if (ihulk === "b" || ihulk === "B") {
    return "You choose b. Incorrect. iHulk did not get the REALITY code <br>iThanos SNAPS his fingers<br>.<br>Half of the people around you begin to disappear<br>Restart the game<br>http://localhost:4000/start";
  } else {
    return "You have to enter a or b. Try again.";
  }
};

//A.4.iCA.iThor.SPACE-Code.Q5
const chooseAnswer4 = (icaptainamerica) => {
  if (icaptainamerica === "a" || icaptainamerica === "A") {
    return 'You choose a! Thats correct! iCaptainAmerica has secured a code. You have [1.MIND][2.POWER][3.REALITY]--Add->[4.TIME]<br>.<br>5.iThor focuses the energy towards a fighting front of Lokis army and the behemoth Galactus mid-way of the army.<br>iThor shoots his electrical energy towards the bad guys. Everyone collapses, while Galactus falls forward further crushing his own men.<br>In the end, a tablet slides towards iThors feet in an ever so cool slow-motion ending scene shot. IThor eyes the tablet and squints.<br>.<br>To access the tablet for the SPACE code. Choose A or B:<br>.<br>const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>fruits.sort() <br>.<br> a) JS Array Sorts <a href="http://localhost:4000/ithor?ithor=a">click here</a><br> b) JS Arrays <a href="http://localhost:4000/ithor?ithor=b">click here</a>';
  } else if (icaptainamerica === "b" || icaptainamerica === "B") {
    return "You choose b. Incorrect. iCaptain America did not get the TIME code <br>iThanos SNAPS his fingers<br>.<br>Half of the people around you begin to disappear<br>Restart the game<br>http://localhost:4000/start"
  } else {
    return "You have to enter a or b. Try again.";
  }
};

//A.5.iThor.iDrStrange SOUL-Code.Q6
const chooseAnswer5 = (ithor) => {
  if (ithor === "a" || ithor === "A") {
    return `You choose a! Thats correct! iThor has secured a code. [1.MIND][2.POWER][3.REALITY][4.TIME]--Add->[5.SPACE]<br>.<br>6.iDr Strange conjures up a circular portal and reaches through and grabs the tablet behind Ultron's back without detection.<br>Dr Strange closes the portal and says a snarky "Thank you. Whatever you are".<br>.<br>To access the tablet for the SOUL code. Choose A or B:<br> a) JS Arrays<a href="http://localhost:4000/idrstrange?idrstrange=a">click here</a><br> b) JS Array Methods <a href="http://localhost:4000/idrstrange?idrstrange=b">click here</a>`;
  } else if (ithor === "b" || ithor === "B") {
    return "You choose b. Incorrect. iThor not get the SPACE code"
  } else {
    return "You have to enter a or b. Try again.";
  }
};

//A.6.DrS.GameEnd
const chooseAnswer6 = (idrstrange) => {
  if (idrstrange === "a" || idrstrange === "A") {
  return `You choose a! Thats correct! iDr Strange has secured a code. You have all 6 Codes! [1.MIND][2.POWER][3.REALITY][4.TIME][5.SPACE]--Add->[6.SOUL]<br>.<br> You save all of your friends from the iBlip and achieve having all of the six code singularities.<br> Infinity is yours to be had.<br> Select a to restart the game<br><a href="http://localhost:4000/start">click here`;
} else if (idrstrange === "b" || idrstrange === "B") {
  return "You choose b. Incorrect. iThor not get the SPACE code"
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

//wishlist-
//Need Scoring
//need end win or lose
//end 