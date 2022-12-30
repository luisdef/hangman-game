// Set the language of the page by getting the browser information.

const userLang = navigator.language || navigator.userLanguage;
const htmlPageTag = document.querySelector("html");
htmlPageTag.setAttribute("lang", userLang);
