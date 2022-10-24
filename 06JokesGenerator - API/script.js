const jokeinput = document.getElementById("joke");

const apicall = async () => {
  const val = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
  console.log(val);
  const first = await val.json();
  console.log(first);
  const joke = first.joke;
  console.log(joke);
  jokeinput.innerText = joke;
  console.log("button clicked");
};
const btn = document.getElementById("jokeBtn");
console.log(btn);
btn.addEventListener("click", apicall);
