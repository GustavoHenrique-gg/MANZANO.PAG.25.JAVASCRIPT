let A = parseInt(prompt("Digite o valor de A:"));
let B = parseInt(prompt("Digite o valor de B:"));
let C = parseInt(prompt("Digite o valor de C:"));
let D = parseInt(prompt("Digite o valor de D:"));


let resultado = 
  "Soma de " + A + " + " + B + " = " + (A + B) + "\n" +
  "Multiplicação de " + A + " * " + B + " = " + (A * B) + "\n" +

  "Soma de " + A + " + " + C + " = " + (A + C) + "\n" +
  "Multiplicação de " + A + " * " + C + " = " + (A * C) + "\n" +

  "Soma de " + A + " + " + D + " = " + (A + D) + "\n" +
  "Multiplicação de " + A + " * " + D + " = " + (A * D) + "\n" +

  "Soma de " + B + " + " + C + " = " + (B + C) + "\n" +
  "Multiplicação de " + B + " * " + C + " = " + (B * C) + "\n" +

  "Soma de " + B + " + " + D + " = " + (B + D) + "\n" +
  "Multiplicação de " + B + " * " + D + " = " + (B * D) + "\n" +

  "Soma de " + C + " + " + D + " = " + (C + D) + "\n" +
  "Multiplicação de " + C + " * " + D + " = " + (C * D);

alert(resultado);