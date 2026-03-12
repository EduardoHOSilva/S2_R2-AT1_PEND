let inputLT = document.querySelector("#inputLT");
let btnAdicionar = document.querySelector("#btnAdicionar");
let btnRemover = document.querySelector("#btnRemover")
let list = document.querySelector("#LT");
let message = document.querySelector("#message");

btnAdicionar.addEventListener("click", () => {

    let itemTexto = inputLT.value; 

    let novoItem = document.createElement("li"); 

    novoItem.innerText = itemTexto; 
    
    if (itemTexto === "") {
        
        
        message.innerText = `Campo vazio. Preencha agora!`;
        message.className = `text-danger fw-bold`;
    } else {
        
        let messageFeedback = document.querySelector("#message");
        
        messageFeedback.innerText = `Item adicionado com sucesso!`;
        message.className = `text-success fw-bold`;
        list.appendChild(novoItem); 
    }

    inputLT.value = ""; 
});

btnRemover.addEventListener("click", ()=>{
    
    if (list.lastElementChild) {

        
        list.removeChild(list.lastElementChild);

        message.innerText = `Item excluido!`;
        message.className = `text-warning fw-bold`;

    }

});