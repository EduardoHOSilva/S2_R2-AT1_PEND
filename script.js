let nome = document.querySelector("#nome");
let btnEntrar = document.querySelector("#btnEntrar");
let message = document.querySelector("#message");

btnEntrar.addEventListener("click", () => {
    message.innerText = `Seu nome é: ${nome.value}`;
});