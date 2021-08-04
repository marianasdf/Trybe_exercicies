/* Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. 
O código deve retornar em sequência 2 , 15 e 54 . */

const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]); // altere a chamada da funcao rectangleArea
});

/* 2 - Crie uma função sum que dado um número variável de elementos retorna  
a soma desses elementos. Ou seja:
Dica: use parâmetro rest .
 */

const assert = require('assert');
// escreva sum abaixo
const sum = (...numbers) => numbers.reduce(((acc, cur) => acc + cur), 0);

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);