const nickname = localStorage.getItem("nickname");
const playersNameArea = document.getElementById("player");

if (nickname) {
    playersNameArea.innerHTML = nickname + " está jogando";
} else {
    window.location.href = "index.html";
}
