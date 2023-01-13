const boxOfTheWord = document.querySelector("div.word");
const boxOfHints = document.querySelector("div.hints");

fetch("assets/js/contentOfWords.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const arrayOfWords = data.data;
        const raffledIndex = Math.floor(Math.random() * arrayOfWords.length);

        const raffledWordObject = arrayOfWords.at(raffledIndex);

        let defaulHint = document.createElement("p");
        defaulHint.innerText = raffledWordObject.hints[0];
        boxOfHints.appendChild(defaulHint);

        const arrayOfLetters = raffledWordObject.word.split("");
        arrayOfLetters.forEach((letter) => {
            let letterOfTheRaffledWord = document.createElement("span");
            letterOfTheRaffledWord.className = "letter not-discovered";
            letterOfTheRaffledWord.innerText = "x";

            boxOfTheWord.appendChild(letterOfTheRaffledWord);
        });
    });
