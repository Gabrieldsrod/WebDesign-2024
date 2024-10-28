let sequencia = '';

for (let i = 1; i <= 10; i++) {
    if (i === 10) {
        sequencia += i;  // Não adiciona o traço após o número 10
    } else {
        sequencia += i + ' - ';
    }
}

console.log(sequencia);