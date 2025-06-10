
let num1 = parseInt(prompt("Digite o 1º número inteiro:"));
let num2 = parseInt(prompt("Digite o 2º número inteiro:"));
let num3 = parseInt(prompt("Digite o 3º número inteiro:"));
let num4 = parseInt(prompt("Digite o 4º número inteiro:"));
let num5 = parseInt(prompt("Digite o 5º número inteiro:"));


let maior = num1;
let menor = num1;


if (num2 > maior) maior = num2;
if (num3 > maior) maior = num3;
if (num4 > maior) maior = num4;
if (num5 > maior) maior = num5;


if (num2 < menor) menor = num2;
if (num3 < menor) menor = num3;
if (num4 < menor) menor = num4;
if (num5 < menor) menor = num5;

alert("O maior número é: " + maior + "\nO menor número é: " + menor);