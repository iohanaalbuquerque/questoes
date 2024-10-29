function calcularMediaAlunos(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        const nome = alunos[i][0];
        const notas = alunos[i][1];

        
        const somaNotas = notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNotas / notas.length;

        const status = media >= 70 ? "Aprovado" : "Reprovado";

        console.log(`${nome}, média ${media.toFixed(2)}, ${status}`);
    }
}

