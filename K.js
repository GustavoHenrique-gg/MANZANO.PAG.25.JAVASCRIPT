let real = parseFloat(prompt("Digite quanto reais você tem :"));
let cotacao = parseFloat(prompt("Digite a cotação atual do dólar:"));

let dolar = real / cotacao;

alert("Na conversão você vai ter R$"+ dolar.toFixed(2));