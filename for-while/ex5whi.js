// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0. -->
while (true) {

    let n = prompt("Digite um número:")
    if(n == "0"){
     console.log("Digitou o numero 0")  
      break
    }
    
}
// ----------------------------------
// Outra maneira de fazer

// do{
//   n = parseInt(prompt("Digite um número (Digite 0 para sair: "))
// }while (numero !==0);
// console.log("Voce digitou 0. O programa foi encerrado");