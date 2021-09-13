const sides = document.querySelectorAll(".sides");
const calculateArea = document.querySelector("#calculate-area");
const output = document.querySelector("#userOutput");
function areaCalculate() {
  if (Number(sides[0].value) > 0 && Number(sides[1].value) > 0) {
    let area = 0.5 * Number(sides[0].value) * Number(sides[1].value);
    output.innerHTML = "Area of Triangle is " + area;
  } else {
    output.innerHTML = "Enter both the fields with postive values";
  }
}
calculateArea.addEventListener("click", areaCalculate);
