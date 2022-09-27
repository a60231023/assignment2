const text = document.getElementById("canvas");

const buttonclick = document.getElementById("button");

buttonclick.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.random();
    const bit = random * 16 | 0;
    color += bit.toString(16);
  }
  text.style.backgroundColor = color;
  console.log(color);
});
