/* 
1 - Faça um algoritmo que leia os valores de A, B, C 
e em seguida imprima na tela a soma entre A e B é 
mostre se a soma é menor que C.
*/

let a = 5;
let b = 15;
let c = 20;

const soma = a + b;

if (soma > c) {
    console.log("A soma de A e B é maior que C");
} else if (soma === c) {
    console.log("A soma de A e B é igual a C");   
} else {
    console.log("A soma de A e B é menor a C");
}