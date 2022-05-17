//Considere a quantidade de alunos presentes na sala, percorra do zero ate o numero
//total de alunos e retornar os seguintes resultados:

//se o número for par, escreva "par" e o numero correspondente.
//se o número for impar, escreva "impar"e o numero correspondente.
// se o número for zero, escreva "zero"e o número correspondente

for(let alunos = 0; alunos <= 17; alunos+=1) {

    if (alunos == 0) {
        console.log("zero "+ alunos);
    } else {
        if (alunos % 2 == 0) {
            console.log ("par " + alunos);
        } else {
            console.log ("impar " + alunos);
        }
    }
}