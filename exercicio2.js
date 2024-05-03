// Escreva um programa que solicita ao usuário um número de 1 a 7 
// representando um dia da semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
//  2 representa terça-feira e assim por diante.

let dia = parseInt(prompt("Digite o numero do dia da semana"))
switch(dia){
    case 1:
        console.log("segunda-feira") 
        break;
    case 2:
        console.log("Terça-feira") 
        break;
    case 3:
        console.log("Quarta-feira") 
        break;
    case 4:
        console.log("Quinta-feira") 
        break;
    case 5:
        console.log("Sexta-feira") 
        break;
    case 6:
        console.log("sabado") 
        break;
    case 7:
        console.log("Domingo") 
        break;
    default:
        console.log("O numero digitado esta errado.")   
        break;

}
