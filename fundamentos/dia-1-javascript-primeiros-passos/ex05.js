/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/

let degreeAngleA = 60;
let degreeAngleB = 80;
let degreeAngleC = 10;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;
let allAnglesArePositve = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;
if (allAnglesArePositve && sumOfAngles === 180) {
  console.log(TRUE);
}
else {
  console.log(FALSE);
}