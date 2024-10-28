const nome = "Gabriel da Silva Rodrigues";
const partes = nome.toLowerCase().split(' ');
const email = `${partes[0]}.${partes[partes.length - 1]}@facens.br`;
console.log(email);
