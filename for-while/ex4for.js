// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.
let n = parseInt(prompt("Digite algum numero: "))
for(let contador = 1;contador <= 10; contador++){
    console.log(n + " x " + contador + " = " + (n*contador))
}