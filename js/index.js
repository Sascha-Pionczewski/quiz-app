const bookmarkSvg = document.querySelector('[data-js="bookmark-svg"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

bookmarkSvg.addEventListener("click", () => {
  bookmarkSvg.classList.toggle("marked");
});

let counter = 0;

answerButton.addEventListener("click", () => {
  answer.classList.toggle("answer--hidden");

  if (counter === 0) {
    answerButton.textContent = "Hide Answer";
    counter++;
    return;
  } else {
    answerButton.textContent = "Show Answer";
  }
  counter--;
});
