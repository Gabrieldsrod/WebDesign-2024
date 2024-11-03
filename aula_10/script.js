let indice = -1;

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://6724c0a0c39fedae05b299fb.mockapi.io/anim/animais')
        .then(response => response.json())
        .then(data => {
            data.forEach(animal => {
                const li = document.createElement('li');
                li.innerHTML = `${animal.id} - ${animal.nome} (${animal.idade} anos) - ${animal.raca}`;
                document.getElementById("animais").appendChild(li);
            });
        })
        .catch(error => console.log('Erro:', error));
});

document.querySelector('#cadastrar').addEventListener('click', () => {
    fetch('https://6724c0a0c39fedae05b299fb.mockapi.io/anim/animais', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nome" : document.getElementById('nome').value,
            "idade" : document.getElementById('idade').value,
            "raca" : document.getElementById('especie').value
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const li = document.createElement('li');
        li.innerHTML = `${data.id} - ${data.nome} (${data.idade} anos) - ${data.raca}`;
        document.getElementById("animais").appendChild(li);
    })
    .catch(error => console.log('Erro:', error));
});

document.querySelector('#limpar').addEventListener('click', () => {
    fetch('https://6724c0a0c39fedae05b299fb.mockapi.io/anim/animais')
        .then(response => response.json())
        .then(data => {
            const promises = [];
            for (let i = 10; i < data.length; i++) {
                const animal = data[i];
                promises.push(fetch(`https://6724c0a0c39fedae05b299fb.mockapi.io/anim/animais/${animal.id}`, {
                    method: 'DELETE'
                }));
            }
            return Promise.all(promises);
        })
        .then(() => {
            const ul = document.getElementById("animais");
            while (ul.children.length > 10) {
                ul.removeChild(ul.lastChild);
            }
        })
        .catch(error => console.log('Erro:', error));
});



