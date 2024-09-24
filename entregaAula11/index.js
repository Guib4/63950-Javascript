const quiz = [
    {pergunta: 'Qual é o metodo usado para adicionar um item ao final de um array',
    respostas: ['1. add()', '2. push()', '3. map()', '4. insert()'],
    respostaCorreta: 2                
    },

    {
        pergunta: 'Qual é o tipo de dado usado para representar verdadeiro ou falso no JavaScript?',
        respostas: ['1. String', '2. Number', '3. Boolean', '4. Objeto'],
        respostaCorreta: 3
    },

    {
        pergunta: 'Como declara const ou let no JavaScript',
        respostas: ['1. const = variavel', '2. const = 0', '3. let var = 0', '4. const variavel = 0'],
        respostaCorreta: 4
    }
]

function fazerQuiz(){
    let score = 0

    for(let i = 0; i < quiz.length; i++){
        let resposta = prompt("${quiz[i].pergunta"} \n ${quiz[i].respostas.join('\n')})


        if(parseInt(resposta) === quiz[i].respostaCorreta){
            alert('Correto')
            score++
        }else {
            alert("Incorreto! A resposta correta é" ${quiz[i].respostas[quiz[i].respostaCorreta -1]})
        }
    }

    alert("Voce acertou" ${score} "de" ${quiz.length} "perguntas".)
}

     fazerQuiz()