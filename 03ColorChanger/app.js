const text = document.getElementById("canvas");

const buttonclick = document.getElementById("button");

buttonclick.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.random();
    const bit = Math.floor(random * 16) ;
    console.log(bit);
    console.log(hex.toString(16));
    color += bit.toString(16); // to covert the bit into hex 
  }
  text.style.backgroundColor = color;
  console.log(color);
});
