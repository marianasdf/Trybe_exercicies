/*Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. 
Caso contrário, ele retorna false */

let number1 = 8;
let number2 = 9;
let number3 = 12;

let isEven = false;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
  isEven = true;
}
console.log(isEven);