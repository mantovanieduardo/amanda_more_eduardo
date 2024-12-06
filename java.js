onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

// Inicializa a variável da porcentagem
let percentage = 0;

// Pega os elementos da porcentagem, botão e mensagem
const percentageElement = document.getElementById("percentage");
const button2 = document.getElementById("button2");
const messageContainer = document.getElementById("message-container");
const body = document.body;

// Adiciona um ouvinte de evento para o clique no botão
button2.addEventListener("click", function () {
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
        // Exibe a mensagem com a animação de palavras
        displayWordsAnimation();

        // Após a animação das palavras, inicia a animação de escurecimento e redirecionamento
        setTimeout(() => {
            body.style.animation = "fadeOut 6s forwards"; // Aplica a animação de desaparecimento

            // Após a animação, redireciona para a próxima página
            setTimeout(() => {
                window.location.href = "pag5.html"; // Redireciona para a página 5
            }, 6000); // Tempo da animação de desaparecimento
        }, 4000); // Espera a animação das palavras terminar
    }
});

// Função para exibir as palavras uma por vez
function displayWordsAnimation() {
    const words = ["EU", "TE", "AMO", "DEMAIS,", "MEU", "BEM!"];
    const messageText = document.createElement("p");
    messageText.classList.add("message-text");
    messageContainer.innerHTML = ""; // Limpa o contêiner
    messageContainer.appendChild(messageText);
    messageContainer.style.display = "block"; // Exibe o contêiner da mensagem

    let index = 0;

    const interval = setInterval(() => {
        if (index < words.length) {
            messageText.textContent += `${words[index]} `; // Adiciona a próxima palavra
            index++;
        } else {
            clearInterval(interval); // Para o intervalo quando todas as palavras forem exibidas
        }
    }, 3000 / words.length); // Distribui o tempo igualmente para todas as palavras
}
