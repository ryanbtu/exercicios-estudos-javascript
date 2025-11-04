/*
2 - Faça um algoritmo para receber um número qualquer 
e imprimir na tela se o número é par ou ímpar, positivo ou negativo.
*/

const num = 0;

if (num % 2 === 0 && num >= 0){
    console.log("O número é par e Positivo");
} else if (num % 2 === 0 && num < 0){
    console.log("O número é par e Negativo");
} else if (num % 2 !== 0 && num > 0){
    console.log("O número é ímpar e Positivo");
} else {
    console.log("O número é ímpar e Negativo");
}