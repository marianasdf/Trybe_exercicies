/*Escreva um programa que se inicie com dois valores em duas variáveis diferentes: 
o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro 
(valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.*/

let costOfProduct = 5;
let saleValue = 10;
 
if (costOfProduct >= 0 && saleValue >= 0){
  let totalCost = costOfProduct + ((costOfProduct*20)/100);
  let totalProfit = (saleValue - totalCost)*1000;
  console.log(totalProfit);
}
else{
  console.log('error, valor inválido!')
};
