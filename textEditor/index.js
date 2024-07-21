let inputValue = document.querySelector("#input-field");
let outputField = document.querySelector("#output-field");

let upper = document.querySelector(".uppercase");
let lower = document.querySelector(".lowercase");
let capital = document.querySelector(".capitalize");
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");

inputValue.addEventListener("input", () => {
  outputField.textContent = inputValue.value;
});
// ----- Reusable Function
function toggleStyle(element, style, value1, value2) {
  element.style[style] = element.style[style] === value1 ? value2 : value1;
}
upper.addEventListener("click", () => {
  toggleStyle(outputField, "textTransform", "uppercase", "none");
});
lower.addEventListener("click", () => {
  toggleStyle(outputField, "textTransform", "lowercase", "none");
});
capital.addEventListener("click", () => {
  toggleStyle(outputField, "textTransform", "capitalize", "none");
});
bold.addEventListener("click", () => {
  toggleStyle(outputField, "fontWeight", "bold", "normal");
});
italic.addEventListener("click", () => {
  toggleStyle(outputField, "fontStyle", "italic", "normal");
});
underline.addEventListener("click", () => {
  toggleStyle(outputField, "textDecoration", "underline", "none");
});

// upper.addEventListener('click', () => {
//    outputField.textContent = outputField.textContent.toUpperCase()
// })
// lower.addEventListener('click', () => {
//    outputField.textContent = outputField.textContent.toLowerCase()
// })
// capital.addEventListener('click', () => {
//     outputField.style.textTransform = "capitalize";
// })
// bold.addEventListener('click', () => {
//    outputField.style.fontWeight = 'bold'
// })
// italic.addEventListener('click', () => {
//     outputField.style.fontStyle = 'italic'
// })
