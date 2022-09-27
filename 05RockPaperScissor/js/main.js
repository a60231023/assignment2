const choice = document.querySelectorAll(".choice");
const user = document.getElementById("result-user-stat");
const computer = document.getElementById("result-comp-stat");
const result = document.getElementById("result-final-stat");
const userScore = document.querySelector("#userScoreVal");
const compScore = document.querySelector("#compScoreVal");
console.log(result);
console.log(userScore);
console.log(compScore);

let userchoice = "";
let computerchoice = "";
var userwincount = 0;
var compwincount = 0;

choice.forEach((element, index) => {
  element.addEventListener("click", () => {
    userchoice = index + 1;
    computerchoice = Math.ceil(Math.random() * 3);
    // console.log(computerchoice);
    checkWinner(userchoice, computerchoice);
    userScore.textContent = userwincount;
    compScore.textContent = compwincount;
    user.innerHTML = `User: ${userchoice}`;
    computer.innerHTML = `Computer: ${computerchoice}`;
  });
});

const winner = {
  computerWin: function () {
    result.innerText = `Winner: Computer Win`;
    compwincount++;
    console.log(compwincount);
  },
  userWin: function () {
    result.innerText = `Winner: User Win`;
    userwincount++;
    console.log(userwincount);
  },
  gameDraw: function () {
    result.innerText = `Winner: Game Draw`;
  },
};

function checkWinner(userChoice, computerChoice) {
  switch (true) {
    case userChoice == 1 && computerChoice == 2:
      winner.computerWin();
      break;
    case userChoice == 1 && computerChoice == 3:
      winner.userWin();
      break;
    case userChoice == 2 && computerChoice == 1:
      winner.userWin();
      break;
    case userChoice == 2 && computerChoice == 3:
      winner.computerWin();
      break;
    case userChoice == 3 && computerChoice == 1:
      winner.computerWin();
      break;
    case userChoice == 3 && computerChoice == 2:
      winner.userWin();
      break;
    default:
      winner.gameDraw();
      break;
  }
}

// console.log(userwincount);
// console.log(compwincount);
