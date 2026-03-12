let inputLT = document.querySelector("#inputLT");
let btnAdicionar = document.querySelector("#btnAdicionar");
let btnRemover = document.querySelector("#btnRemover");
let list = document.querySelector("#LT");
let message = document.querySelector("#message");

btnAdicionar.addEventListener("click", () => {
  let itemTexto = inputLT.value;

  if (itemTexto === "") {
    message.innerText = "OPA! Campo vazio, meu amigo!";
    message.className = "text-danger fw-bold";
    return;
  }

  let novoItem = document.createElement("li");
  novoItem.className = "list-group-item d-flex justify-content-between";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input";

  let texto = document.createElement("span");
  texto.innerText = itemTexto;

  let btnExcluir = document.createElement("button");  
  btnExcluir.innerText = "Remover";
  btnExcluir.className = "btn btn-sm btn-danger";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      texto.classList.add("text-decoration-line-through", "text-muted");
    } else {
      texto.classList.remove("text-decoration-line-through", "text-muted");
    }
  });

  btnExcluir.addEventListener("click", () => {
    if (list.contains(novoItem)) {
      list.removeChild(novoItem);
      message.innerText = "Você excluiu um item. Segura a bronca e bora continuar!";
      message.className = "text-warning fw-bold";
    }
  });

  novoItem.appendChild(checkbox);
  novoItem.appendChild(texto);
  novoItem.appendChild(btnExcluir);

  list.appendChild(novoItem);

  message.innerText = "Objetivo registrado! Você vai conseguir!";
  message.className = "text-success fw-bold";

  inputLT.value = "";
});

btnRemover.addEventListener("click", () => {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
    message.innerText = "Último item removido! Agora é só seguir em frente!";
    message.className = "text-warning fw-bold";
  } else {
    message.innerText = "Vai remover o quê? Tá vazio igual a fita VHS sem filme!";
    message.className = "text-danger fw-bold";
  }
});