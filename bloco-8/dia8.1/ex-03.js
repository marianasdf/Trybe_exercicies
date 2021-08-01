const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkGabarito = (gabarito, estudantes, callback) => {
    let contador = 0;
    for (let index = 0; index < gabarito.length; index += 1) {
        const callbackReturn = callback(gabarito[index], estudantes[index]);
        contador += callbackReturn;
    }
    return `Resultado final: ${contador} corretas`;
};

const checkPoints = (respostasGabarito, respostasEstudantes) => {
    if (respostasGabarito === respostasEstudantes) {
        return 1
    }
    if (respostasEstudantes === 'N.A') {
        return 0
    }
    return - 0.5

};

console.log(checkGabarito(RIGHT_ANSWERS, STUDENT_ANSWERS, checkPoints));
