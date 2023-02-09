// Dark Mode Toggle

const profileBody = document.querySelector('[data-js="profile-body"]');
const bookmarksBody = document.querySelector('[data-js="bookmarks-body"]');
const indexBody = document.querySelector('[data-js="index-body"]');
const darkModeButton = document.querySelector('[data-js="darkMode-button"]');

darkModeButton.addEventListener("click", () => {
  const globalBody = document.body;
  globalBody.classList.toggle("dark");
});
