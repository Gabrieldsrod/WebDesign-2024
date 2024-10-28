let display = document.getElementById('display');
let valores = [];

function adicionarValor(event) {
    let valor = event.target.innerText;
    display.innerText += valor;
    valores.push(valor);
}

function calcular() {
    let expressao = display.innerText;
    let resultado = eval(expressao);

    display.innerText = resultado;
    valores = [resultado];
}

function limpar() {
    display.innerText = '';
    valores = [];
}

document.querySelectorAll('.botoes button').forEach(button => {
    if (button.innerText === '=') {
        button.addEventListener('click', calcular);
    } else if (button.innerText === 'C') {
        button.addEventListener('click', limpar);
    } else {
        button.addEventListener('click', adicionarValor);
    }
});