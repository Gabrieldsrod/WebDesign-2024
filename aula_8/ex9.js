//ex9

let endereco = {
    rua: "Rua das Flores",
    numero: 123,
    bairro: "Jardim das Rosas",
    cidade: "Sorocaba",
};

for (let propriedade in endereco) {
    console.log(`${propriedade}: ${endereco[propriedade]}`);
}