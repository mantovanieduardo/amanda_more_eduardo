onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
  setTimeout(function() {
    const flowers = document.querySelector('.flowers');
    if (flowers) {
        flowers.classList.add('hidden'); // Adiciona a classe que reduz a opacidade
    }
}, 10000); // Altere o tempo (em milissegundos) conforme necessário

// Inicializa a variável da porcentagem
let percentage = 0;

// Pega os elementos da porcentagem, botão e mensagem
const percentageElement = document.getElementById("percentage");
const button2 = document.getElementById("button2");
const messageContainer = document.getElementById("message-container");
const body = document.body;

// Adiciona um ouvinte de evento para o clique no botão
button2.addEventListener("click", function() {
    // Se a porcentagem ainda não estiver visível, exibe ela
    if (percentageElement.style.display === "none") {
        percentageElement.style.display = "block"; // Mostra a porcentagem
    }

    // Se a porcentagem já atingiu 100%, não faz nada
    if (percentage >= 100) {
        return; // Impede novos aumentos
    }

    // Atualiza a porcentagem e a exibe
    percentage += 10; // Aumenta 10%
    percentageElement.textContent = `${percentage}%`; // Exibe o novo valor

    // Verifica se a porcentagem atingiu 100%
    if (percentage === 100) {
        // Exibe a mensagem
        messageContainer.style.display = "block"; // Mostra a mensagem

        // Inicia a animação de desaparecimento
        body.style.animation = "fadeOut 6s forwards"; // Aplica a animação de desaparecimento
        
        // Após a animação, redireciona para a próxima página
        setTimeout(() => {
            window.location.href = "pag5.html"; // Redireciona para a página 5
        }, 8000); // Tempo para a animação (2 segundos)
    }
});

