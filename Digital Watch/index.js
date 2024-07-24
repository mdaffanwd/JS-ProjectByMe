const hr = document.querySelector(".hr");
console.log(hr);
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function timeNow() {
  const now = new Date();
let hours = now.getHours()
hours = hours % 12 || 12;

  hr.innerHTML = hours
  // console.log(hr);
  min.innerHTML = String(now.getMinutes()).padStart(2, '0');
  sec.innerHTML = String(now.getSeconds()).padStart(2, '0');

  hours = hours % 12 || 12; 

}
setInterval(timeNow, 1000);
