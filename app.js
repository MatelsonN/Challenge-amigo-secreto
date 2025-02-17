//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if(nome.length == '') {
        alert('Por favor, insira um nome.');
    } else {
        nomes.push(nome);
    }
    limparTela();
    exibirTextoNaTela('listaAmigos', nomes);
    console.log(nomes);
   
}

function exibirTextoNaTela(tag, texto) {
    let lista = document.getElementById(tag);
    lista.innerHTML = texto;
    
}

function limparTela() {
    nome = document.querySelector('input');
    nome.value = '';
    lista = [];
    exibirTextoNaTela('listaAmigos', lista);
    
}


function sortearAmigo() {
    let sorteio = Math.floor(Math.random() * nomes.length);
    let amigoSorteado = nomes[sorteio];
    limparTela();
    exibirTextoNaTela('resultado', `O amigo secreto sorteado é: ${amigoSorteado}`);
    
}
