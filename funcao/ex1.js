// criar um menu onde e possivel executar  6 dos exercicios anteriores.
//  de exercicio utilizando o ex. dado em aula

// dentro de uma funcao,e o menu deve executar funcao
// o usuario podera escolher qual exercicio ele quer visualizar.

function números1a10() {
    let idade = parseInt(prompt("Digite um número; "))
    for (let contador = 1; contador <= 10; contador++) {
        console.log(contador)
    }
}
function nùmeroímpares() {
    let idade = parseInt(prompt("Digite um número ímpar até 50: ; "))
    for (let contador = 0; contador <= 50; contador++) {
        if (contador % 2 == 1) {
            console.log(contador)
        }
    }
}
function idade18(){
   let idade = parseInt(prompt("Digite sua idade; "))
    while (true) {
        let idade = prompt("Digite sua idade: ")
        if (idade >= 18) {
            console.log("Voce é maior de idade. ")
            break
        }
    }
}


let menu = prompt("Escolha uma opção: \n1 - número1a10 - Exemplo Repeticao")

switch (menu) {
    case "1":
        console.log("Hello world");
        break;
    case "2":
        console.log("Hello world");
        break;
    case "3":
        console.log("Hello world");
        break;
    case "4":
        console.log("Hello world");
        break;
    case "5":
        console.log("Hello world");
        break;
    case "6":
        console.log("Hello world");
        break;

}