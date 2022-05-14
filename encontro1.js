// Se a peça possuir mais de 100 gramas pode cadastrar;
// dada a capacidade de cada caixa, caso a lista de peça seja superior a 10, 
//imprimir menssagem de erro com a mensagem Informando não ter capacidade suficiente;
// caso a peça tenha nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

let entradaPeso = require("readline-sync");

let peso = entradaPeso.question("Qual é o peso em gramas da peça?");

if (peso > 100) {
    console.log("peça cadastrada com sucesso.");
} else {
    console.log("não foi possivel cadastrar a peça, peso insuficiente.");
}

let entradaQuantidade = require("readline-sync");

let quantidade = entradaQuantidade.question("Qual a quantidade de peças?");

if (quantidade > 10){
    console.log("Capacidade superior a permitida");
} else {
    console.log("Quantidade cadastrada com sucesso");
}

let nomeQuantidade = require("readline-sync");

let nome = nomeQuantidade.question("Qual é o nome da peça?");
if (nome.length < 3){
    console.log("O tamanho do nome inferior ao permitido");
} else {
    console.log ("nome cadastrado com sucesso");
}
