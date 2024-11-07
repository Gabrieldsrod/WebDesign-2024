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
console.log("O número de vogais em -" + " Paralelepipedo: " + contarVogais("Paralelepipedo"));

console.log('');