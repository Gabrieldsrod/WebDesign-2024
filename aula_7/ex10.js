function verificarPalindromo(texto) {
    let textoInvertido = texto.split('').reverse().join('');
    
    return texto === textoInvertido;
}

console.log(verificarPalindromo("arara"));
console.log(verificarPalindromo("reviver"));          
console.log(verificarPalindromo("pneumococos"));     
console.log(verificarPalindromo("javascript"));
