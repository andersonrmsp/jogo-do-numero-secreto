let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.3} );
}


reiniciarJogo()

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`);
    

}

function verificarChute(){
    let chute = document.querySelector('input').value;
    // console.log(numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
                exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++
        limparCampo();
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}

function gerarNumeroAleatorio() {
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNalista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    // console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
}
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}