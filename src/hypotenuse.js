const sides = document.querySelectorAll(".sides");
const calculateButton = document.querySelector(".calculate");
const output = document.querySelector("#userOutput");
function calculateHypotenuse() {
  if (sides[0].value && sides[1].value) {
    let sumofSidesSquared = sumOfSquareSides(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    output.innerHTML = "Hypotenuse is " + Math.sqrt(sumofSidesSquared);
  } else {
    output.innerHTML = "Enter both the fields";
  }
}
function sumOfSquareSides(side1, side2) {
  return side1 * side1 + side2 * side2;
}
calculateButton.addEventListener("click", calculateHypotenuse);
