let numeros = [20, 55, 22, 34, 88, 95, 45, 76, 12,67];

let encontrarMaiorNumero = function(numeros) {
    let maiorNumero = 0;
    for (let numero of numeros) {
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    }
    return maiorNumero;
}

console.log(encontrarMaiorNumero(numeros));