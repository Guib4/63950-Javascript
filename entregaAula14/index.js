function calcularResultado() {
    const form = document.getElementById('quiz-form');
    let pontuacao = 0;

    // Respostas corretas
    const respostasCorretas = {
        q1: 'a',
        q2: 'b',
        q3: 'd'
    };

    // Verificando as respostas
    const respostasUsuario = new FormData(form);
    for (let [pergunta, resposta] of respostasUsuario.entries()) {
        if (resposta === respostasCorretas[pergunta]) {
            pontuacao++;
        }
    }

    // Exibindo o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `Você acertou ${pontuacao} de 3 perguntas!`;

    // Estilização dinâmica do resultado (opcional)
    if (pontuacao === 3) {
        resultadoDiv.style.color = 'green';
    } else if (pontuacao === 0) {
        resultadoDiv.style.color = 'red';
    } else {
        resultadoDiv.style.color = '#0056b3';
    }
}
