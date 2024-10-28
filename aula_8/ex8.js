//ex8

let produto = {
    nome: "Notebook",
    preco: 3000,
    quantidade: 5,
    calcularTotal() {
        return produto.preco * produto.quantidade;
    }
};

console.log('R$'+ produto.calcularTotal());