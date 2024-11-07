let cardCounter = 1;

function cadastrarCard() {
    let titulo = document.getElementById('produto').value;
    let cardsContainer = document.getElementById('cards');
    let cardId = `card-${cardCounter++}`;

    let cardHTML = `
        <div class="col-md-3" id="${cardId}">
            <div class="card text-center" style="width: 18rem;">
                <img src="https://picsum.photos/seed/${titulo}/600/400" alt="">
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <a class="btn btn-danger" onclick="apagarCard('${cardId}')">Apagar</a>
                </div>
            </div>
        </div>
    `;

    cardsContainer.innerHTML += cardHTML;
}

function apagarCard(cardId) {
    let card = document.getElementById(cardId);
    card.remove();
}

function apagarTodos() {
    let cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';
    cardCounter = 1;
}
