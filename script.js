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

// ********************
// SENHA DO CODIGO
// ********************
function showLoginForm() {
    var form = document.getElementById("loginForm");
    form.style.display = "block"; // Mostra o formulário quando a imagem é clicada
}

function checkPassword() {
    var password = document.getElementById("password").value;
    
    // Aqui você verifica se a senha está correta
    if (password === "PMStra") {
        window.location.href = "fitas.html"; // Redireciona para outra página se a senha estiver correta
        return false; // Impede o envio do formulário
    } else {
        return false; // Impede o envio do formulário
    }
}
