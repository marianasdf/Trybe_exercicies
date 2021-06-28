/*Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. 
Caso contrário, ele retorna false .*/

let number1 = 5;
let number2 = 4;
let number3 = 8;

let isOdd = false;

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0);{
   isOdd = true;
}
console.log(isOdd);