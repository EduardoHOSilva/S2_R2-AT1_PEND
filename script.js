let inputLT = document.querySelector("#inputLT");
let btnAdicionar = document.querySelector("#btnAdicionar");
let list = document.querySelector("#LT");
let message = document.querySelector("#message");

btnAdicionar.addEventListener("click", () => {

    let itemTexto = inputLT.value; 

    let novoItem = document.createElement("li"); 
    novoItem.innerText = itemTexto; 
    
    if (itemTexto === "") {        
        
        message.innerText = `Campo vazio. Preencha!`;

        message.className = `text-danger fw-bold`;

    } else {
        
        let messageFeedback = document.querySelector("#message");
        
        messageFeedback.innerText = `Item adicionado!`;
        message.className = `text-success fw-bold`;
        list.appendChild(novoItem); 
    }
    inputLT.value = ""; 

});