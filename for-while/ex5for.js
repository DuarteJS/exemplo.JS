// Imprimir os primeiros 10 números da sequência de Fibonacci.
let a = 0;
let b = 1;
let c;

for(contador = 0; contador < 10; contador++){
    console.log(a)
    c = a + b
    a = b 
    b = c
}