const perguntas = [
    {
        pergunta: "O que significa HTML?",
        opcoes: [
            "Hyper Text Markup Language",
            "High Tech Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        resposta: "Hyper Text Markup Language"
    },
    {
        pergunta: "Qual a propriedade CSS usada para alterar a cor de fundo de um elemento?",
        opcoes: [
            "color",
            "background-color",
            "bgcolor",
            "background"
        ],
        resposta: "background-color"
    },
    {
        pergunta: "Qual das opções é uma estrutura de controle de fluxo no JavaScript?",
        opcoes: [
            "while",
            "for",
            "if",
            "Todas as alternativas acima"
        ],
        resposta: "Todas as alternativas acima"
    },
    {
        pergunta: "Qual atributo HTML é usado para definir um link?",
        opcoes: [
            "src",
            "href",
            "alt",
            "link"
        ],
        resposta: "href"
    },
    {
        pergunta: "Como você cria uma função no JavaScript?",
        opcoes: [
            "function myFunction()",
            "function:myFunction()",
            "function = myFunction()",
            "create myFunction()"
        ],
        resposta: "function myFunction()"
    },
    {
        pergunta: "Qual o método usado para acessar um elemento HTML pelo ID no JavaScript?",
        opcoes: [
            "document.getElementById()",
            "document.querySelector()",
            "document.getElementsByClass()",
            "document.getElement()"
        ],
        resposta: "document.getElementById()"
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta() {
    const quizForm = document.getElementById('quiz-form');
    quizForm.innerHTML = '';

    if (perguntaAtual < perguntas.length) {
        const perguntaObj = perguntas[perguntaAtual];

        // Exibe a pergunta
        const perguntaElement = document.createElement('h3');
        perguntaElement.textContent = `${perguntaAtual + 1}. ${perguntaObj.pergunta}`;
        quizForm.appendChild(perguntaElement);

        // Exibe as opções
        perguntaObj.opcoes.forEach(opcao => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="pergunta" value="${opcao}">
                ${opcao}
            `;
            quizForm.appendChild(label);
            quizForm.appendChild(document.createElement('br'));
        });

        // Botão para a próxima pergunta
        const button = document.createElement('button');
        button.type = "button";
        button.textContent = perguntaAtual < perguntas.length - 1 ? "Próxima" : "Ver Resultado";
        button.onclick = verificarResposta;
        quizForm.appendChild(button);

    } else {
        exibirResultado();
    }
}

function verificarResposta() {
    const respostaSelecionada = document.querySelector('input[name="pergunta"]:checked');
    if (!respostaSelecionada) {
        alert("Selecione uma resposta.");
        return;
    }

    if (respostaSelecionada.value === perguntas[perguntaAtual].resposta) {
        pontuacao++;
    }

    perguntaAtual++;
    carregarPergunta();
}

function exibirResultado() {
    const quizForm = document.getElementById('quiz-form');
    const resultadoDiv = document.getElementById('resultado');

    quizForm.style.display = 'none';
    resultadoDiv.style.display = 'block';

    const percentual = ((pontuacao / perguntas.length) * 100).toFixed(0);
    resultadoDiv.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas (${percentual}%).`;

    if (percentual === "100") {
        resultadoDiv.style.color = 'green';
        resultadoDiv.innerHTML += "<br>Parabéns, você acertou todas as perguntas!";
    } else if (percentual >= 50) {
        resultadoDiv.style.color = '#0056b3';
        resultadoDiv.innerHTML += "<br>Boa! Você tem bons conhecimentos.";
    } else {
        resultadoDiv.style.color = 'red';
        resultadoDiv.innerHTML += "<br>Tente novamente para melhorar sua pontuação.";
    }
}

document.addEventListener("DOMContentLoaded", carregarPergunta);
