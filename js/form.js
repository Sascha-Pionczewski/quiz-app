const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const tagInput = document.querySelector('[data-js="tag"]');
const button = document.querySelector('[data-js="button"]');
const main = document.querySelector('[data-js="main"]');
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = document.createElement("artikel");
  const newQuestion = document.createElement("h2");
  const newCardButton = document.createElement("button");
  const newAnswer = document.createElement("p");
  const newTag = document.createElement("p");

  newQuestion.textContent = questionInput.value;
  newCardButton.textContent = "Show Answer";
  newAnswer.textContent = answerInput.value;
  newTag.textContent = tagInput.value;

  newCardButton.classList.add("button_show_answer");

  newCard.append(newQuestion);
  newCard.append(newCardButton);
  newCard.append(newAnswer);
  newCard.append(newTag);
  newCard.classList.add("quiz-card");
  main.append(newCard);

  event.target.reset();
});
