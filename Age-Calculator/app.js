// const container;
const error = document.getElementsByClassName("error");
console.log(error);
const dob = document.getElementById("dob");
console.log(dob);
let value;
// dob.addEventListener("input", () => {
//     value = dob.value;
//     console.log(value);
// })

const yearss = document.getElementById("years");
const monthss = document.getElementById("months");
const dayss = document.getElementById("days");
function getAge() {
  dob.addEventListener("input", () => {
    value = dob.value;
    console.log(value);
    calcAge(value);
  });
}

function calcAge(value) {
  let current = new Date(value);
  console.log(current);
  let diff = new Date() - current;
  if (diff < 0) {
    error[0].style.display = "block";
  }

  console.log(diff);
  let diff_in_sec = diff / 1000;
  let format = new Date(diff);
  console.log(format);
  let year = format.getUTCFullYear() - 1970;
  console.log(year);

  const month = Math.floor(diff_in_sec / 3600 / (24 * 30)) % 12;
  console.log(month);

  const days = Math.floor(diff_in_sec / 3600 / 24) % 30;
  console.log(days);

  // converting to hours

  const hours = Math.floor((diff_in_sec / 3600) % 24);
  console.log(hours);

  // convertin to minture

  const minutes = Math.floor((diff_in_sec / 60) % 60);
  console.log(minutes);

  const seconds = Math.floor(diff_in_sec % 60);
  console.log(seconds);

  const result = { year, month, days, hours, minutes, seconds };
  console.log(result);
  displayAge(result);
}

function displayAge(result) {
  yearss.innerText = result.year;
  monthss.innerText = result.month;
  dayss.innerText = result.days;
}

getAge();
