
// Desenvolvedor 3 - Gera um número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    document.getElementById('resultado').innerHTML = `Número gerado: ${numeroAleatorio}`;
}
