/*
9 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, 
leia o seu peso e sua altura e imprima na tela sua condição 
de acordo com a tabela abaixo:
Fórmula do IMC = peso / (altura) ²
Tabela Condições IMC
 Abaixo de 18,5   | Abaixo do peso          
 Entre 18,6 e 24,9 | Peso ideal (parabéns)  
 Entre 25,0 e 29,9 | Levemente acima do peso
 Entre 30,0 e 34,9 | Obesidade grau I 
 Entre 35,0 e 39,9 | Obesidade grau II (severa)
 Maior ou igual a 40 | Obesidade grau III (mórbida)
*/

let peso = 100;
let altura = 1.81;

let imc = peso / (altura*altura);

switch (true) {
    case (imc < 18.5):
        console.log("Abaixo do peso");
        break;
    case (imc >= 18.6 && imc < 24.9):
        console.log("Parabéns você está no peso ideal!");
        break;
    case (imc >= 25 && imc < 29.9):
        console.log("Levemente acima do peso");
        break;
    case (imc >= 30 && imc < 34.9):
        console.log("Obesidade grau I");
        break;
    case (imc >= 35 && imc < 39.9):
        console.log("Obesidade grau II (severa)");
        break;
    case (imc >= 40):
        console.log("Obesidade grau III (mórbida)");
        break;
    default:
        console.log("Valor inválido");
        break;
}