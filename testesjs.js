// const a = 0
// var x;
// let y;
// z = 1;
// console.log(a)
// console.log(x)
// console.log(y)
// console.log(z)
// //tipos de variáveis
// t = 'a'
// console.log(typeof t)
// t = 1
// console.log(typeof t)
// t = 1.12
// console.log(typeof t)


// const peso1 = 1.0;
// const peso2 = 2.1;
// console.log(peso1);
// console.log(Number.isInteger(peso1));
// console.log(peso2);
// console.log(Number.isInteger(peso2));
// const avaliacao1 = 9.45;
// const avaliacao2 = 6.456;
// const total = avaliacao1 * peso1 + avaliacao2 * peso2;
// const media = total / (peso1 + peso2);
// console.log(media.toFixed(1)); //toFixed fixa a quantidade de casas após a vírgula
// console.log(media.toString());
// console.log(typeof media);
// //number com n minúsculo é um tipo e com N maiúsculo é uma função
// console.log(typeof Number);


const nome = "Fábio";
console.log(nome.charAt(3));
console.log(nome.charCodeAt(3));
console.log(nome.replace("bi", "XX"));
console.log(nome.length);
console.log(nome.endsWith("i"));
console.log(nome.indexOf("d"));
console.log(nome.substring(0, 3));
console.log(nome.toLocaleUpperCase());
console.log("Ana,Maria,José".split(","));
console.log(nome.concat(' Rodrigo '.concat('Colombini')));
if (nome.includes("i")) { }

//Concatenação de strings
// let nome = "Fábio"
// let concatenacao = "Olá " + nome + "!"
// console.log(concatenacao)
// //template string
// let template = 
// `Olá 
// ${nome}!`
// console.log(template)
// //expressões
// console.log(`1 + 1 = ${1 + 1}`)
// //string up(string texto){ return texto.toUpperCase();}
// const up = texto => texto.toUpperCase();
// console.log(`Ei! ${up('Cuidado')}!`)

// let isAtivo = true;
// console.log(isAtivo);
// isAtivo = false;
// console.log(isAtivo);

// console.log("os verdadeiros...");
// console.log(!!isAtivo);
// console.log(!!3)
// console.log(!!-1)
// console.log(!!' ')
// console.log(!![])
// console.log(!!{})
// console.log(!!(isAtivo = true))
// console.log(!!Infinity)

// let num = prompt("Digite um número: ");