function fruta (nome, cor, peso){
    this.nome = nome;
    this.cor = cor;
    this.peso = peso;

    this.informacoesDaFruta = function (){
        console.log("Nome da fruta é: " + this.nome)
    }
}

const uva = new fruta (uva, roxo, 10)
