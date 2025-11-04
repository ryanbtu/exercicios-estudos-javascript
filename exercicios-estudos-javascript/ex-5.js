/*
5 - Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, 
calcule quantos salários mínimos esse 
usuário ganha e imprima na tela o resultado. 
(Base para o Salário mínimo R$ 1.293,20).
*/


let salario = 1930.00;

if (salario === 1293.20) {
    console.log("Usuário ganha um salário mínimo");
} else if (salario > 1293.20 && salario <= 2570.52) {
    console.log("Usuário ganha entre um e dois salários mínimos");
} else if (salario > 2570.52 && salario <= 3856.94) {
    console.log("Usuário ganha entre dois e três salários mínimos");
} else {
    console.log("Usuário ganha mais de três salários mínimos");
}

