// Reset Local Storage

const buttonReset = document.getElementById("reset-nickname");

buttonReset.addEventListener("click", function (evt) {
    localStorage.removeItem("nickname");
    window.location.href = "index.html";
});
