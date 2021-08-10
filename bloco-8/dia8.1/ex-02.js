
/* retornar o resultado de um sorteio; 
gerar um número aleatório de 1 a 5
parâmetros = número apostado e uam função que chega se o num sorteado é igual ao apostado */


const checkNumber = (betNumber, randomNumber) => {
    if (betNumber === randomNumber) {
        return 'Parabéns, você ganhou!';
    } else {
        return 'Tente Novamente!';
    }

};

const numberDraw = (betNumber, checkNumber) => {
    const randomNumber = Math.floor((Math.random() * 6) + 1);
    return checkNumber(betNumber, randomNumber);
};
console.log(numberDraw(4, checkNumber)); 