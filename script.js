// Desenvolvedor 1 - Exibe uma mensagem de boas-vindas
function exibirMensagem() {
    document.getElementById('resultado').innerHTML = 'Bem-vindo ao Projeto JS!';
}

// Desenvolvedor 2 - calcula a soma de dois números
function somarNumeros(num1, num2) {
    const soma = num1 + num2;
    document.getElementById('resultado').innerHTML = `A soma é: ${soma}`;
}

// Desenvolvedor 3 - Gera um número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    document.getElementById('resultado').innerHTML = `Número gerado: ${numeroAleatorio}`;
}
