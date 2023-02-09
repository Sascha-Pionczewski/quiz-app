// Dark Mode Toggle

const profileBody = document.querySelector('[data-js="profile-body"]');
// const bookmarksBody = document.querySelector('[data-js="bookmarks-body"]');
// const indexBody = document.querySelector('[data-js="index-body"]');
const darkModeButton = document.querySelector('[data-js="darkMode-button"]');
// const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
// const bookmarkSvg = document.querySelector('[data-js="bookmark-svg"]');

darkModeButton.addEventListener("click", () => {
  const globalBody = profileBody;
  globalBody.classList.toggle("dark");
});
