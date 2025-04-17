let botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem");

botao.addEventListener("click",e =>{
    botao.style.background = "red";
    botao.style.color = "blue";
    mensagem.style.background = "yellow";
    mensagem.style.color = "blue";
    mensagem.innerHTML = "Com Deus ao meu lado, sempre vencerei"; })
