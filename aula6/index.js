const count = (numero) =>{
    if (numero <0){
        return "O fatorial não retorna númeor negativo"
    }
}

let fatorial = 1;
let i = 1;
let formula = "";

while(i <= numero){
    fatorial *= i;
    formual += i;
    if(i < numero){
        formula += ' x ';
    }
    i++
}

return '${formula} = ${fatorial}';