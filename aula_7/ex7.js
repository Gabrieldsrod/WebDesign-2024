function inverterString(texto) {
    return texto.split('').reverse().join('');
}

let invertido = inverterString("Facens");
console.log(invertido);

function inverterStringTradicional(texto) {
    let invertido = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    return invertido;
};

let invertidoTradicional = inverterStringTradicional("Facens");
console.log(invertidoTradicional);