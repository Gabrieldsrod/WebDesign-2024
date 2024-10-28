let numeros = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10];

let impares = function (numeros) {
    let impares = [];
    for (let numero of numeros) {
        if (numero % 2 !== 0) {
            impares.push(numero);
        }
    }
    return impares;
}

console.log(impares(numeros));