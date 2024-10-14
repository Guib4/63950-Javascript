// Função para exibir a próxima pergunta
function proximaPergunta(numeroPergunta) {
    // Oculta a pergunta atual
    const perguntas = document.getElementsByClassName('quiz-screen');
    for (let i = 0; i < perguntas.length; i++) {
        perguntas[i].style.display = 'none';
    }
    // Exibe a próxima pergunta
    document.getElementById('question' + numeroPergunta).style.display = 'block';
}

// Função para calcular o resultado final
function calcularResultado() {
    const form = document.getElementById('quiz-form');
    let pontuacao = 0;

    // Respostas corretas
    const respostasCorretas = {
        q1: 'a',
        q2: 'b',
        q3: 'd',
        q4: 'b',
        q5: 'a',
        q6: 'a'
    };

    // Verificando as respostas
    const respostasUsuario = new FormData(form);
    for (let [pergunta, resposta] of respostasUsuario.entries()) {
        if (resposta === respostasCorretas[pergunta]) {
            pontuacao++;
        }
    }

    // Ocultar todas as perguntas
    const perguntas = document.getElementsByClassName('quiz-screen');
    for (let i = 0; i < perguntas.length; i++) {
        perguntas[i].style.display = 'none';
    }

    // Exibir o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    resultadoDiv.textContent = `Você acertou ${pontuacao} de 6 perguntas!`;

    // Estilização dinâmica do resultado (opcional)
    if (pontuacao === 6) {
        resultadoDiv.style.color = 'green';
    } else if (pontuacao === 0) {
        resultadoDiv.style.color = 'red';
    } else {
        resultadoDiv.style.color = '#0056b3';
    }
}
