const container = document.querySelector(".container");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const div = document.createElement("div");
div.setAttribute("class", "display");
container.appendChild(div);
const display = document.querySelector(".display");
display.style.fontSize = "2rem";
const allButtons = document.querySelectorAll(".btn");
display.textContent = 0;

let count = 0;

allButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const classesForIncrease = e.currentTarget.classList[1];
    const classesForDecrease = e.currentTarget.classList[1];
    const classesForReset = e.currentTarget.classList[1];
    if (classesForIncrease === "increase") {
      count++;
    } else if (classesForDecrease === "decrease") {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      display.style.color = "green";
    } else if (count < 0) {
      display.style.color = "red";
    } else {
      display.style.color = "black";
    }
    display.textContent = count;
  });
});
