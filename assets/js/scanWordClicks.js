import { lettersToBeDiscovered } from './generateWordSpaces.js';

const LIVES = 8;
let COUNT_LIVE = 8;

const letters = document.querySelectorAll('.letter');
const hangman = document.querySelector('#hangman-image');
const placeMessages = document.querySelector('.msgs');

function rightLetterMessage(rightLetter) {
    
}

function wrongLetterMessage(wrongLetter) {
    
}

function wrongLetterPressed() {
    const imageUrlFromHangMan = hangman.getAttribute("src");
    // The link provided by the 'url' is something like:
    // |> 'http://127.0.0.1:5500/assets/imgs/stages/hangman_0.png'
    // To catch the stage number of the Hangman image we'll use
    // a reverse selection, like url.at(-5), because there is the number.
    let stageLife = Number(imageUrlFromHangMan.at(-5));
    if (stageLife <= LIVES-1) {
        hangman.setAttribute("src", `assets/imgs/stages/hangman_${stageLife+1}.png`);
        COUNT_LIVE -= 1;
    } else {
        console.info("There is nothing more to do... ☹️");
    }
}

function isRightLetter(clickedLetter) {
    let found = false;
    lettersToBeDiscovered.forEach((letterToDiscover) => {
        if (clickedLetter == letterToDiscover) found = true;
    });
    return found;
}

function rightLetterPressed(letter) {
    const indexes = [];
    for (let i=0; i<=lettersToBeDiscovered.length; i++) {
        if (letter == lettersToBeDiscovered[i]) indexes.push(i);
    }
    const notDiscLetters = document.querySelectorAll('.word *');
    indexes.forEach((index) => {
        notDiscLetters[index].innerHTML = letter;
        notDiscLetters[index].removeAttribute('class');
        notDiscLetters[index].setAttribute("class", "letter discovered");
    });
}

letters.forEach((letter) => {
    letter.addEventListener('click', (evt) => {
        evt.preventDefault();
        
        if (!letter.ariaChecked) {
            if (isRightLetter(letter.innerHTML)) {
                rightLetterPressed(letter.innerHTML);
            } else {
                wrongLetterPressed();
            }
            letter.ariaChecked = true;
            letter.style.opacity = 0.5;
        }
    });
});
