let numero;
let maior = null;
let menor = null;

do {
  numero = parseInt(prompt("Digite um número inteiro positivo (ou negativo para encerrar):"));

  if (numero >= 0) {
    if (maior === null || numero > maior) {
      maior = numero;
    }
    if (menor === null || numero < menor) {
      menor = numero;
    }
  }

} while (numero >= 0);

if (maior !== null && menor !== null) {
  alert("Maior valor informado: " + maior + "\nMenor valor informado: " + menor);
} else {
  alert("Nenhum valor positivo foi informado.");
}