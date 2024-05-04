 // Função para aplicar o efeito de glitch
 function glitchEffect() {
    // Seleciona todos os elementos com a classe 'glitch'
    var elements = document.querySelectorAll('.glitch');

    // Para cada elemento, adiciona e remove a classe 'glitched' com um intervalo de tempo
    elements.forEach(function(element) {
        setInterval(function() {
            element.classList.toggle('glitched');
        }, Math.random() * 1000 + 500); // Intervalo de tempo aleatório entre 500ms e 1500ms
    });
}

// Chama a função de efeito de glitch após o carregamento da página
window.onload = glitchEffect;