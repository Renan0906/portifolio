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

// Seleciona o botão e o corpo da página
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Verifica se o usuário já tinha uma preferência salva no navegador
const savedTheme = localStorage.getItem('theme');

// Se tiver uma preferência salva, aplica ela imediatamente ao carregar
if (savedTheme === 'light') {
    bodyElement.classList.add('light-theme');
    themeToggleBtn.textContent = '☀️';
}

// Adiciona o evento de clique no botão
themeToggleBtn.addEventListener('click', () => {
    // Alterna a classe no body
    bodyElement.classList.toggle('light-theme');
    
    // Verifica qual tema está ativo agora e salva no localStorage
    if (bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '🌙';
    }
});