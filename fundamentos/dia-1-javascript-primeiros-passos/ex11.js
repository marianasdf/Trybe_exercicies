let aliquotINSS;
let aliquotIR;

let grossSalary = 3000;

if (grossSalary <= 1556.94) {
    aliquotINSS = grossSalary * 0.08;
}
else if (grossSalary <= 3751.05) {
    aliquotINSS = grossSalary * 0.09;
}
else if (grossSalary <= 5189.82) {
    aliquotINSS = grossSalary * 0.11;
}
else{
    aliquotINSS = 570.88
}

let baseSalary = grossSalary - aliquotINSS;

if (grossSalary <= 1903.98){
 aliquotIR = 0
}
else if (grossSalary <= 2826.65){
    aliquotIR = (baseSalary * 0.075) - 142,80;
}
else if (grossSalary <= 3751.05){
    aliquotIR = (baseSalary * 0.15) - 384.84;
}
else if (grossSalary <= 4664.68){
    aliquotIR = (baseSalary * 0.225) - 636.13;
}
else{
    aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log('Salário: ' + (baseSalary - aliquotIR));