/*
8 - Faça um algoritmo que leia três valores inteiros 
diferentes e imprima na tela os valores em ordem decrescente.
*/
let x = 25;
let y = 10;
let z = 15;

switch (true) {
    case (x > y && x > z && y > z):
        console.log(`Ordem decrescente: ${x}, ${y}, ${z}`);
        break;
    case (x > y && x > z && z > y):
        console.log(`Ordem decrescente: ${x}, ${z}, ${y}`);
        break;
    case (y > x && y > z && x > z):
        console.log(`Ordem decrescente: ${y}, ${x}, ${z}`);
        break;
    case (y > x && y > z && z > x):
        console.log(`Ordem decrescente: ${y}, ${z}, ${x}`);
        break;  
    case (z > x && z > y && x > y):
        console.log(`Ordem decrescente: ${z}, ${x}, ${y}`);
        break;  
    case (z > x && z > y && y > x):
        console.log(`Ordem decrescente: ${z}, ${y}, ${x}`);
        break;  
    default:
        console.log("Os valores não são diferentes.");
        break;
}