// criar um menu onde e possivel executar  6 dos exercicios anteriores.
//  de exercicio utilizando o ex. dado em aula

// dentro de uma funcao,e o menu deve executar funcao
// o usuario podera escolher qual exercicio ele quer visualizar.



let repetir = true

while (repetir) {
    let menu = parseInt(prompt("Escolha uma opção: \n 1- contagem de 1 a 10 \n2- nùmero ímpares \n3- verificação de maioridade \n4- IMC \n5- verificação se é par ou ímpar 6- Ano de nascimento "))

    if (isNaN(menu)) {
        console.log("Digite apenas números!")
        continue
    }

    switch (menu) {
        case 0:
            console.log("Voce escolheu sair!");
            repetir = false
            break;
        case 1:
            ex1()

            break;
        case 2:
            ex2()

            break;
        case 3:

            ex3()
            break;
        case 4:

            break;
        case 5:
            ex5()

            break;
        case 6:
            ex6()

            break;

        default:
            console.log("Valor inserido esta incorreto!")
            break

    }
}
function ex1() {
    let idade = parseInt(prompt("Digite um número; "))
    for (let contador = 1; contador <= 10; contador++) {
        console.log(contador)
    }
}
function ex2() {
    let idade = parseInt(prompt("Digite um número ímpar até 50: ; "))
    for (let contador = 0; contador <= 50; contador++) {
        if (contador % 2 == 1) {
            console.log(contador)
        }
    }
}
function ex3() {
    let idade = parseInt(prompt("Digite sua idade; "))
    while (true) {
        let idade = prompt("Digite sua idade: ")
        if (idade >= 18) {
            console.log("Voce é maior de idade. ")
            break
        }
    }
}
function ex4() {
    let peso = parseFloat(prompt("Digite seu peso"))
    let altura = parseFloat(prompt("Digite sua altura"))
    IMC = peso / (altura * altura)

    if (IMC < 18.5) {
        console.log("Abaixo do peso")
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        console.log("Peso normal")
    }
    else if (IMC >= 25.0 && IMC <= 29.9) {
        console.log("Sobrepeso")
    }
    else if (IMC >= 30.0 && IMC <= 34.9) {
        console.log("Obesidade grau 1")
    }
    else if (IMC >= 35.0 && IMC <= 39.9) {
        console.log("Obesidade grau 2")
    }
    else if (IMC >= 40.0) {
        console.log("Obesidade grau 3")
    }
}
function parOuímpar() {
    let n = parseInt(prompt("Digite um numero"))
    if (n % 2 == 0) {
        console.log("O numero " + n + " é par")

    } else {
        console.log("O numero " + n + " é impar")

    }
}
function ex6() {
    let idade = parseInt(prompt("Digite seu ano de nascimento"))
    if (2024 - idade >= 18) {
        console.log("Voce é maior de idade.");
        console.log("Sua idade é + idade");
    } else {
        console.log("voce não maior de idade.");
        console.log("Sua idade é + idade");
    }
}