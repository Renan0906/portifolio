// Seleciona os elementos do HTML pelo ID
const botao = document.getElementById('botaoCurtir');
const displayContador = document.getElementById('numeroCurtidas');

// Inicializa a variável do contador
let quantidadeCurtidas = 0;

// Adiciona o evento de clique no botão
botao.addEventListener('click', function() {
    quantidadeCurtidas = quantidadeCurtidas + 1;
    displayContador.textContent = quantidadeCurtidas;
});
