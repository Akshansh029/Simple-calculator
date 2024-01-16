document.addEventListener("DOMContentLoaded", () => {});
let display = document.getElementById("display");

function displayNum(input) {
  display.value += input;
}
function equals() {
  try {
    display.value = eval(display.value).toFixed(2);
  } catch (error) {
    console.error(error);
    display.value = "Error";
  }
}
function clear_display() {
  display.value = "";
}
