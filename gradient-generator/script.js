const body = document.querySelector("body");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const clrVal = document.querySelector(".clrVal");
const clrVal2 = document.querySelector(".clrVal2");
const codeSpace = document.querySelector(".codespace");
const copiedMessage = document.querySelector(".copied");

// ====== Actual code ======
let color1 = clrVal.innerHTML;
let color2 = clrVal2.innerHTML;
body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
codeSpace.innerHTML = `background-image: background-image: linear-gradient(to right, ${color1}, ${color2})`;
// Random Color Logic
function randomColor() {
  let hexValue = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)].toUpperCase();
  }
  return color;
}

// First btn handler
function btnOneClr() {
  color1 = randomColor();

  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;

  codeSpace.innerHTML = `background-image: background-image: linear-gradient(to right, ${color1}, ${color2})`;
  console.log(color1, color2);
  clrVal.textContent = color1;
  this.style.backgroundColor = color1;
}
function btnTwoClr() {
  color2 = randomColor();

  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;

  codeSpace.innerHTML = `background-image: background-image: linear-gradient(to right, ${color1}, ${color2})`;
  clrVal2.textContent = color2;
  this.style.backgroundColor = color2;
}

// randomColor()

btn1.addEventListener("click", btnOneClr);
btn2.addEventListener("click", btnTwoClr);
codeSpace.addEventListener("click", function () {
  navigator.clipboard.writeText(this.innerHTML).then(() => {
    copiedMessage.innerHTML = "Copied to clipboard";
    setTimeout(() => {
      copiedMessage.innerHTML = "";
    }, 2000);
  });
});
