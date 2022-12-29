const nickname = localStorage.getItem("nickname");

const buttonResetDataFromPlayer = document.getElementById("reset-nickname");
const tagPlayerName = document.getElementById("player-name");
const tagHighScore = document.getElementById("highscore");

const explanationWithoutUserData = document.querySelector(".no-data");
const explanationWithUserData = document.querySelector(".with-data");

const nicknameArea = document.getElementById("nickname");
const playButton = document.getElementById("play-btn");

if (nickname) {
    explanationWithoutUserData.style.display = "none";
    tagPlayerName.innerHTML += nickname;
    playButton.style.display = "block";
    nicknameArea.style.display = "none";

    playButton.onclick = () => {
        window.location.href = "game.html";
    }
} else {
    explanationWithUserData.style.display = "none";
    tagPlayerName.style.display = "none";
    tagHighScore.style.display = "none";
    buttonResetDataFromPlayer.style.display = "none";

    function verifyIfHasANickname() {
        if (nicknameArea.value.length >= 3 && nicknameArea.value.length <= 15) {
            playButton.style.display = "block";
        }
        else {
            playButton.style.display = "none";
        }
    }

    verifyIfHasANickname();

    nicknameArea.oninput = () => {
        verifyIfHasANickname();
    }

    playButton.onclick = () => {
        localStorage.setItem("nickname", nicknameArea.value);
        window.location.href = "game.html";
    }
}
