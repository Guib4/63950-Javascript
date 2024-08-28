function obterPrecoDeCusto() {
    let precoDeCusto = parseFloat(prompt("Insira o preço de custo do produto:"));
    return precoDeCusto;
}

// Função 2: Calcula o valor do ICMS sobre o preço de custo

function calcularICMS(precoDeCusto, percentualICMS) {
    let valorICMS = precoDeCusto * (percentualICMS / 100);
    return valorICMS;
}

// Função 3: Calcula o preço final com o ICMS incluído e exibe o resultado
function mostrarPrecoCalculado(precoDeCusto, valorICMS) {
    let precoFinal = precoDeCusto + valorICMS;
    console.log("O preço de custo é: R$ " + precoDeCusto.toFixed(2));
    console.log("O valor do ICMS é: R$ " + valorICMS.toFixed(2));
    console.log("O preço final com ICMS incluído é: R$ " + precoFinal.toFixed(2));
}

// Processo completo
function calcularPrecoComICMS() {
    let precoDeCusto = obterPrecoDeCusto();
    let percentualICMS = parseFloat(prompt("Insira o percentual de ICMS (em %):"));
    
    if (isNaN(precoDeCusto) || isNaN(percentualICMS)) {
        console.log("Valores inválidos. Por favor, insira números válidos.");
        return;
    }
    
    let valorICMS = calcularICMS(precoDeCusto, percentualICMS);
    mostrarPrecoCalculado(precoDeCusto, valorICMS);
}

// Executa o processo de cálculo
calcularPrecoComICMS();