let aluno = {
    nome: "Gabriel",
    idade: 19,
    curso: "Engenharia da Computação",
    matrícula: 248103,
};

aluno.mostrarInformacoes = function() {
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Curso: ${aluno.curso}`);
    console.log(`Matrícula: ${aluno.matrícula}`);
};

aluno.mostrarInformacoes();