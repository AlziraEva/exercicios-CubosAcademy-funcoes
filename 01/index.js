const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};


// Implemente a função corrigirProva de modo que, ao receber um objeto como este como 
//parâmetro, o resultado seja o seguinte:
// ex: O aluno(a) João acertou 3 questões e obteve nota 6

function corrigirProvas(prova) {
    let acertos = 0
    let nota = 0
    for (let item of prova.questoes) {
        if (item.resposta === item.correta) {
            acertos++
            nota += 2
        }
    }

    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}.`)


}
corrigirProvas(prova)