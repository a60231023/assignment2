const jokeinput = document.getElementById("joke");

const apicall = async () => {
  const val = await fetch("https://v2.jokeapi.dev/joke/Any?type=single/value=safe-mode");//enabling safe mode gives many jokes undefined
  console.log(val);
  const first = await val.json();
  console.log(first);
  const joke = await first.joke;
  console.log(joke);
  if(joke == undefined){
    alert('not for kids');
  }else{
    jokeinput.innerText = joke;
  
  }
  console.log("button clicked");
};
const btn = document.getElementById("jokeBtn");
console.log(btn);
btn.addEventListener("click", apicall);

// fetch("https://v2.jokeapi.dev/joke/Any?type=single/value=safe-mode")
//   .then((response) => {
//     // const first = response.json();
//     console.log(response);
//     return response.json();
//   })
//   .then((second) => {
//     console.log(second);
//   });

// fetch("https://v2.jokeapi.dev/joke/Any?type=single/value=safe-mode")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// // console.log(apicall2);
