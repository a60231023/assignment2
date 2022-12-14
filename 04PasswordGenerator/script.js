const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const chars = "abcdefghijklmnopqrstuvwxyz";
const symbs = `~! @#$%^&*()_-+={[}]|\:;"'<,>.?/`;

clipboardEl.addEventListener("click", () => {
  let copyValue = resultEl.innerText;
  if (copyValue !== "") {
    resultEl.style.backgroundColor = "#808080";
    setTimeout(() => {
      resultEl.style.backgroundColor = "transparent";
    }, 4000);
  }
  navigator.clipboard
    .writeText(copyValue)
    .then(() => {
      alert("successfully copied");
    })
    .catch(() => {
      alert("something went wrong");
    });
});

generateEl.addEventListener("click", () => {
  generatePassword(
    randomFunc.lower,
    randomFunc.upper,
    randomFunc.number,
    randomFunc.symbol,
    lengthEl.value
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  const generatedPassword = [];
  if (length >= 5 && length <= 20) {
    for (let i = 0; i < length; i++) {
      generatedPassword.push(lower(), upper(), number(), symbol());
    }
    console.log(generatedPassword);
    const password = generatedPassword.join("").slice(0, length);
    resultEl.textContent = password;
  } else if (length < 5) {
    resultEl.textContent = "Enter value 5 or bigger";
  } else {
    resultEl.textContent = "Enter value 20 or smaller";
  }
}

function getRandomLower() {
  if (lowercaseEl.checked) {
    const ramdomAlphabetLowerChar =
      chars[Math.floor(Math.random() * chars.length)].toLowerCase();
    return ramdomAlphabetLowerChar;
  }
}

function getRandomUpper() {
  if (uppercaseEl.checked) {
    const randomAlphabetUpperChar =
      chars[Math.floor(Math.random() * chars.length)].toUpperCase();
    return randomAlphabetUpperChar;
  }
}

function getRandomNumber() {
  if (numbersEl.checked) {
    const randomNumber = [Math.floor(Math.random() * 10)];
    return randomNumber;
  }
}

function getRandomSymbol() {
  if (symbolsEl.checked) {
    const randomSymbols = symbs[Math.floor(Math.random() * symbols.length)];
    return randomSymbols;
  }
}
