document.querySelector('#b-title').onclick = function() {
    document.querySelector('#titulo').innerHTML = 'Title em Ingles';
};

document.querySelector('#b-para').onclick = function() {
    document.querySelector('#paragrafo').style.color = 'teal';
};

document.querySelector('#b-img').onclick = function() {
    document.querySelector('#imagem').src = 'https://picsum.photos/id/237/300/200';
    // document.querySelector('#b-img').style.backgroundColor = 'lightblue';
};

document.querySelector('#b-audio').onclick = function() {
    var audio = new Audio('boowomp.mp3');
    audio.play();
};

document.querySelector('#b1').onclick = function() {
    var elemento = document.getElementById('b1');
    elemento.classList.toggle("remove-estilo");
};