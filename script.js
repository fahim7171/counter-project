let display = document.querySelector(".display");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
let count = 0;
increase.addEventListener("click", function () {
  count++;
  display.innerText = count;
});
decrease.addEventListener("click", function () {
  count--;
  display.innerText = count;
  if (count <= 0) {
    count = 0;
    display.innerText = count;
    alert("count cant be less than zero");
  }
});
reset.addEventListener("click", function () {
  count = 0;
  display.innerText = count;
});
