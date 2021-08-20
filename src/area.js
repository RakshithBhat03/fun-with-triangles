const sides = document.querySelectorAll(".sides");
const calculateArea = document.querySelector("#calculate-area");
const output = document.querySelector("#userOutput");
function areaCalculate() {
  if (Number(sides[0].value) && Number(sides[1].value)) {
    let area = 0.5 * Number(sides[0].value) * Number(sides[1].value);
    output.innerHTML = "Area of Triangle is " + area;
  } else {
    output.innerHTML = "Enter both the fields";
  }
}
calculateArea.addEventListener("click", areaCalculate);
