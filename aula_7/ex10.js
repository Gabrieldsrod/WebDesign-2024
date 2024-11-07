// function verificarPalindromo(texto) {
//     let textoInvertido = texto.split('').reverse().join('');
    
//     return texto === textoInvertido;
// }

function verificarPalindromo(texto) {
    let textoInvertido = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    return texto === textoInvertido;
}

console.log(verificarPalindromo("arara"));
console.log(verificarPalindromo("reviver"));          
console.log(verificarPalindromo("pneumococos"));     
console.log(verificarPalindromo("javascript"));
