const perguntas = [
    "Qual a melhor cor do mundo?",
    "Se tivesse que escolher um presente para um afilhado, o que seria?",
    "Qual seu time do coração? (Se for Palmeiras, +10 pontos!)",
    "O que é mais importante: amor ou ajudar a Pururuca?",
    "Se tivesse que escolher entre um churrasco e um presente para um afilhado, qual escolheria?",
    "Na sua opinião, o que faz um presente ser especial?",
    "Se pudesse escolher um superpoder, qual seria?",
    "Qual é o melhor mascote do futebol? (Dica: é um porco 🐷)",
    "Você acredita no destino? Então faça a escolha certa!",
];

function embaralharArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function gerarPerguntas() {
    const questionarioDiv = document.getElementById("questionario");
    questionarioDiv.innerHTML = ""; // Limpa antes de adicionar novas perguntas

    const perguntasEmbaralhadas = embaralharArray(perguntas).slice(0, 4);

    perguntasEmbaralhadas.forEach((pergunta, index) => {
        const label = document.createElement("label");
        label.innerText = `${index + 1}️⃣ ${pergunta}`;

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Digite aqui...";

        questionarioDiv.appendChild(label);
        questionarioDiv.appendChild(input);
    });
}

function verResultado() {
    document.getElementById("perguntas").classList.add("hidden");
    document.getElementById("resultado").classList.remove("hidden");
}

function reiniciar() {
    document.getElementById("resultado").classList.add("hidden");
    document.getElementById("perguntas").classList.remove("hidden");
    gerarPerguntas();
}

// Gera perguntas aleatórias ao carregar a página
document.addEventListener("DOMContentLoaded", gerarPerguntas);
