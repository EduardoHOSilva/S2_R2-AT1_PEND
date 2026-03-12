let inputLista = document.querySelector("#itemInput");
let btnAdicionar = document.querySelector("#btnAdicionar");
let list = document.querySelector("#list");

btnAdicionar.addEventListener("click", function() {
    let itemText = inputLista.value;

    let novoItem = document.createElement("li");

    novoItem.innerText = itemText;

    list.appendChild(novoItem);

    inputLista.value = "";

});