const nickname = localStorage.getItem("nickname");
const playersNameArea = document.getElementById("player");

if (nickname) {
    playersNameArea.innerHTML += nickname;
} else {
    window.location.href = "index.html";
}
