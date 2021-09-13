log = console.log;
const angleInput = document.querySelectorAll(".angle-input");
const isTrinagleButton = document.querySelector(".isTriangleButton");
const userOutput = document.querySelector("#userOutput");
isTrinagleButton.addEventListener("click", () => {
  if (
    Number(angleInput[0].value) > 0 &&
    Number(angleInput[1].value) > 0 &&
    Number(angleInput[2].value) > 0
  ) {
    if (
      Number(angleInput[0].value) +
        Number(angleInput[1].value) +
        Number(angleInput[2].value) ===
      180
    ) {
      userOutput.innerText = "It's a Triangle";
    } else {
      userOutput.innerText = "Oops, it's not a Triangle";
    }
  } else {
    userOutput.innerText = "Enter all the fields with postive values";
  }
});
