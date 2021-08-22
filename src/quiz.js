const quizForm = document.querySelector(".form-quiz");
const submitButton = document.querySelector("#submit-button");
const output = document.querySelector("#answer");
const answerList = ["15cm", "15cm"];
function calculateScore() {
  let score = 0;
  let i = 0;
  const data = new FormData(quizForm);
  for (let item of data.values()) {
    if (answerList[i] == item) {
      score++;
    }
    i++;
  }
  output.innerText = "Your Score: " + score;
  quizForm.reset();
}

submitButton.addEventListener("click", calculateScore);
