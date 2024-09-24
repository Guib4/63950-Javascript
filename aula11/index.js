/*function aleatorio(){
    return Math.floor(Math.random() * 20 + 30)
}

console.log(aleatorio())
console.log(aleatorio())
console.log(aleatorio())

function preencherArray(limit){
    const lista = [];
    for(let i = 0; i < limit; i++){
        lista.push(aleatorio())
    }
    
    return lista;
}

console.log(preencherArray(8))

const data = new Date(1995, 5, 30);

const datadadata = {
    mes: data.getMonth() +1,
    dia: data.getDate()
};

const signos = [{
    nome: 'Áries'

}]

console.log(data)*/

const nascimento = new Date(2025, 5, 30)
const data = new Date()

console.log(nascimento - data) // 1296000000

const milissegundosPorDia = 86400000

console.log(Math.trunc((data - nascimento) / milissegundosPorDia)) // 15

