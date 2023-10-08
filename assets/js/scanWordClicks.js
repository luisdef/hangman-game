import { lettersToBeDiscovered } from "./generateWordSpaces.js"

const LIVES = 8
let COUNT_LIVE = 8

const letters = document.querySelectorAll(".letter")
const hangman = document.querySelector("#hangman-image")
const placeMessages = document.querySelector(".msgs")

function winMessage() {
  const box = document.createElement("div")
  box.setAttribute("class", "end")
  box.setAttribute("id", "end")

  const winMessage = document.createElement("div")
  winMessage.setAttribute("class", "msg-won")
  winMessage.innerHTML = "Parabéns, você ganhou o jogo!"

  const mainPageButton = document.createElement("a")
  mainPageButton.setAttribute("href", "./")
  mainPageButton.innerHTML = "Página inicial"

  winMessage.append(mainPageButton)
  box.appendChild(winMessage)
  document.body.appendChild(box)
  window.location.href = "#end"
  document.body.style = "overflow: hidden"
}

function loseMessage() {
  const box = document.createElement("div")
  box.setAttribute("class", "end")
  box.setAttribute("id", "end")

  const loseMessage = document.createElement("div")
  loseMessage.setAttribute("class", "msg-lose")
  loseMessage.innerHTML = "Que pena, você se enforcou no jogo..."

  const mainPageButton = document.createElement("a")
  mainPageButton.setAttribute("href", "./")
  mainPageButton.innerHTML = "Página inicial"

  loseMessage.append(mainPageButton)
  box.appendChild(loseMessage)
  document.body.appendChild(box)
  window.location.href = "#end"
  document.body.style = "overflow: hidden"
}

function removeMessages() {
  const allMessages = document.querySelectorAll(".msgs *")
  allMessages.forEach((message) => message.remove())
}

function rightLetterMessage(rightLetter) {
  removeMessages()
  const messageRight = document.createElement("span")
  messageRight.setAttribute("class", "click-status right")
  messageRight.innerHTML = `A letra ${rightLetter} foi encontrada na palavra.`
  placeMessages.appendChild(messageRight)
}

function wrongLetterMessage(wrongLetter) {
  removeMessages()
  const messageWrong = document.createElement("span")
  messageWrong.setAttribute("class", "click-status wrong")
  messageWrong.innerHTML = `Oops, a letra ${wrongLetter} não está na palavra.`
  placeMessages.appendChild(messageWrong)
}

function wrongLetterPressed(letterPressed) {
  hangman.style.display = "block"
  const imageUrlFromHangMan = hangman.getAttribute("src")
  // The link provided by the 'url' is something like:
  // |> 'http://127.0.0.1:5500/assets/imgs/stages/hangman_0.png'
  // To catch the stage number of the Hangman image we'll use
  // a reverse selection, like url.at(-5), because there is the number.
  let stageLife = Number(imageUrlFromHangMan.at(-5))
  if (stageLife <= LIVES - 1) {
    hangman.setAttribute(
      "src",
      `assets/imgs/stages/hangman_${stageLife + 1}.png`,
    )
    COUNT_LIVE -= 1
    wrongLetterMessage(letterPressed)
  } else {
    console.info("There is nothing more to do... ☹️")
    loseMessage()
  }
}

function isRightLetter(clickedLetter) {
  let found = false
  lettersToBeDiscovered.forEach((letterToDiscover) => {
    if (clickedLetter == letterToDiscover) found = true
  })
  return found
}

function rightLetterPressed(letter) {
  const indexes = []
  for (let i = 0; i <= lettersToBeDiscovered.length; i++) {
    if (letter == lettersToBeDiscovered[i]) indexes.push(i)
  }
  const notDiscLetters = document.querySelectorAll(".word *")
  indexes.forEach((index) => {
    notDiscLetters[index].innerHTML = letter
    notDiscLetters[index].removeAttribute("class")
    notDiscLetters[index].setAttribute("class", "letter discovered")
  })
  rightLetterMessage(letter)

  if (!document.querySelectorAll(".word .not-discovered").length) winMessage()
}

letters.forEach((letter) => {
  letter.addEventListener("click", (evt) => {
    evt.preventDefault()

    if (!letter.ariaChecked) {
      if (isRightLetter(letter.innerHTML)) {
        rightLetterPressed(letter.innerHTML)
      } else {
        wrongLetterPressed(letter.innerHTML)
      }
      letter.ariaChecked = true
      letter.style.opacity = 0.5
    }
  })
})
