let dolar = parseFloat(prompt("Digite quanto você tem em dólar (US$):"));
let cotacao = parseFloat(prompt("Digite a cotação atual do dólar:"));

let real = dolar * cotacao;

alert(`US$${dolar.toFixed(2)} equivale a R$${real.toFixed(2)}.`);