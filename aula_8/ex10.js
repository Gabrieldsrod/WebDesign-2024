//ex10

let alunos = {
    nome: ["Gabriel", "João", "Maria", "José"],
    idade: [19, 20, 16, 17],
    curso: ["Engenharia da Computação", "Engenharia da Computação", "Engenharia da Computação", "Engenharia da Computação"],
    matricula: [248103, 248104, 248105, 248106]
};

function alunosMaior(alunos) {
    let arrayAlunosMaior = [];
    for (let i = 0; i < alunos.nome.length; i++) {
        if (alunos.idade[i] > 18) {
            arrayAlunosMaior.push({
                nome: alunos.nome[i],
                idade: alunos.idade[i],
                curso: alunos.curso[i],
                matricula: alunos.matricula[i]
            });
        }
    }
    return arrayAlunosMaior;
}

console.log(alunosMaior(alunos));

