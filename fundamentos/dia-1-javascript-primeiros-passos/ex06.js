//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let chessPiece = "bispo";
switch (chessPiece.toLowerCase()) {
  case "rei":
    console.log('move-se na horizontal, vertical e diagonal, somente uma casa de cada vez');
    break;

  case "bispo":
    console.log('move-se ao longo da diagonal, não pode pular outras peças');
    break;
  case "rainha":
    console.log('move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças');
    break;
  case "cavalo":
    console.log('pode pular as outras peças, o movimento é em forma de L, duas casas em sentido horizontal e mais uma na vertical ou vice-versa');
    break;
  case "torre":
    console.log("move-se pela vertical ou horizontal, mas não pode pular as outras peças");
    break;
  case "peão":
    console.log("move-se apenas uma casa para frente e somente captura outras na diagonal");
    break;
  default:
    console.log('erro, peça inválida!');
    break;
};