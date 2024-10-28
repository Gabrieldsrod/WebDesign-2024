let array = [10, 20, 30, 40, 50];

let soma = function (array) {
    let soma = 0;
    for (let total of array) {
        soma += total;
    }
    return soma;
}

console.log(soma(array));