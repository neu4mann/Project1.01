js 

//Welcome to the iBackend.Game.
//Players Name


const start = () => {
  return 'iBackend.Game. iCoders Compile! if you can correctly <br>To access the tablet for the MIND Code you need to Choose A or B: <br>a) JS Function <a href="http://localhost:4000/ironman?ironman=a">click here</a> <br>b) JS Object <a href="http://localhost:4000/ironman?ironman=b">click here</a>'};

const chooseAnswer1 = (ironman) => {
  if (ironman === "a" || ironman === "A") {
    return 'You choose a! Thats correct! iSpider-Man swings to the top...To acces the tablet for the POWER code. Choose A or B: a) JS Arrays<a href="http://localhost:4000/wood?quest1=a">click here</a><br> b) JS Array Methods <a href="http://localhost:4000/wood?quest1=b">click here</a>';
  } else if (ironman === "b" || ironman === "B") {
    return "You choose b. Incorrect. You did not get the POWER code.
  } else {
    return "You have to enter a or b. Try again.";
  }
};



module.exports = {
  start,
  chooseAnswer1
};

