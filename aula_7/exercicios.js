let num1 = 7;
let num2 = 4;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log('');


// Exercício 2

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log('');

// Exercício 3

const texto = "Disciplina de Programação para web";

console.log(texto.length);

console.log(texto.split(' ').join('').length);

console.log('');

// Exercício 4

const nome = "Gabriel da Silva Rodrigues";
const partes = nome.toLowerCase().split(' ');
const email = `${partes[0]}.${partes[partes.length - 1]}@facens.br`;
console.log(email);

console.log('');

// Exercício 5

let sequencia = '';

for (let i = 1; i <= 10; i++) {
    if (i === 10) {
        sequencia += i;  // Não adiciona o traço após o número 10
    } else {
        sequencia += i + ' - ';
    }
}

console.log(sequencia);

console.log('');

// Exercício 6

function mostrarDobro(numero) {
    if (numero > 0) {
        console.log((numero * 2));
    } else {
        console.log("Só é aceito números positivos maiores que zero");
    }
}

mostrarDobro(8);
mostrarDobro(0);
mostrarDobro(-1);

console.log('');

// Exercício 7

function inverterString(texto) {
    return texto.split('').reverse().join('');
}

let resultado = inverterString("Facens");
console.log(resultado);

console.log('');

// Exercício 8
function contarVogais(string) {
    let vogais = "aeiou";
    let contagemVogais = 0;
    for (let i = 0; i < string.length; i++) {
        if (vogais.indexOf(string[i]) !== -1) {
            contagemVogais += 1;
        }
    }
    return contagemVogais;
}
console.log("O número de vogais em -" + " Paraleleipedo: " + contarVogais("Paralelepipedo"));

console.log('');

// Exercício 9

function validarEmail(email) {

    let partes = email.split('@');

    if (partes.length !== 2) {
        return false;
    }

    if (partes[1].includes('.')) {
        return true;
    } else {
        return false;
    }
}

console.log(validarEmail("gabriel@gmail.com")); 
console.log(validarEmail("gabriel@gmail"));      
console.log(validarEmail("gabrielgmail.com"));   
console.log(validarEmail("gabriel@@gmail.com")); 
console.log(validarEmail("gabriel@gmailcom"));

console.log('');

// Exercício 10

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
