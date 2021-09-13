const sides = document.querySelectorAll(".sides");
const calculateButton = document.querySelector(".calculate");
const output = document.querySelector("#userOutput");
function calculateHypotenuse() {
  if (Number(sides[0].value) > 0 && Number(sides[1].value) > 0) {
    let sumofSidesSquared = sumOfSquareSides(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    output.innerHTML =
      "Hypotenuse is " + Math.sqrt(sumofSidesSquared).toFixed(2);
  } else {
    output.innerHTML = "Enter both the fields with postive values";
  }
}
function sumOfSquareSides(side1, side2) {
  return side1 * side1 + side2 * side2;
}
calculateButton.addEventListener("click", calculateHypotenuse);
