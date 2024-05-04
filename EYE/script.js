document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os parágrafos na página
    const paragrafos = document.querySelectorAll("p");

    // Para cada parágrafo, define uma posição aleatória
    paragrafos.forEach(function(paragrafo) {
        // Calcula posições aleatórias dentro do tamanho da janela
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);

        // Aplica as posições aleatórias aos estilos do parágrafo
        paragrafo.style.position = "absolute";
        paragrafo.style.top = randomY + "px";
        paragrafo.style.left = randomX + "px";
    });
});