// Definindo a classe Produto
class Produto {
    // Construtor para criar um novo Produto com nome, preço e quantidade
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    // Método para aumentar a quantidade em estoque
    adicionarEstoque(qtd) {
        this.quantidade += qtd;
        console.log(`${qtd} unidades adicionadas ao estoque do produto ${this.nome}. Quantidade atual: ${this.quantidade}`);
    }

    // Método para diminuir a quantidade em estoque
    removerEstoque(qtd) {
        if (qtd > this.quantidade) {
            console.log(`Não há estoque suficiente do produto ${this.nome}. Quantidade disponível: ${this.quantidade}`);
        } else {
            this.quantidade -= qtd;
            console.log(`${qtd} unidades removidas do estoque do produto ${this.nome}. Quantidade atual: ${this.quantidade}`);
        }
    }

    // Método para exibir as informações do produto
    exibirInfo() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Quantidade em estoque: ${this.quantidade}`);
    }
}

// Exemplo de uso do objeto Produto no simulador

// Criando um novo produto
let produto1 = new Produto('Camiseta', 49.99, 100);

// Exibindo as informações do produto
produto1.exibirInfo();

// Adicionando 20 unidades ao estoque
produto1.adicionarEstoque(20);

// Removendo 50 unidades do estoque
produto1.removerEstoque(50);

// Tentando remover mais unidades do que as disponíveis
produto1.removerEstoque(200);

// Exibindo as informações atualizadas
produto1.exibirInfo();
