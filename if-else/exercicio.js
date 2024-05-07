// exercio 1; verificacao de login
// Escreva um programa que solicite ao usuario um nome de usuario e um usuario e uma senha.verifique se  o nome de usuario e "admin" e a senha e "senha 123" escreva se o login e bem sucedido ou nao




let username = prompt("Digite um nome de usuario:")
let senha = prompt("Digite a senha:")

if(username == "admin" && senha == "senha123"){
    console.log("Login bem sucedido");
}   else {
    console.log("Voce nao tem permissao de acesso!")
    }


// == verifica se um valor e igual a outro (true ,false)
// === verifica se o valor e o tipo dos itens sao iguais (true ,false)
// console.log( 1 == 1 )

// if (username == "adimn") {
    // console.log("Voce é admin");

    // if(senha === "senha123")
    // console.log("bem vindo ADMIN!");
// }






