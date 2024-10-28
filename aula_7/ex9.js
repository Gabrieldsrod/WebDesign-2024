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
