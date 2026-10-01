const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    // Adiciona ou remove a classe .light-theme do body
    document.body.classList.toggle('light-theme');
    
    // Alterna o ícone entre lua e sol baseado no modo ativo
    if (document.body.classList.contains('light-theme')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});
