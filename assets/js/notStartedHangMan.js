const hangmanImage = document.querySelector("img#hangman-image")

const imageUrlFromHangMan = hangmanImage.getAttribute("src")

if (Number(imageUrlFromHangMan.at(-5)) === 0) {
  hangmanImage.style.display = "none"
}
