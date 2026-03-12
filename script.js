let btnMudar = document.querySelector("#btnMudar");
let message = document.querySelector("#message");

btnMudar.addEventListener("click", () => {
    message.innerText = "Texto alterado com JavaScript!";
});