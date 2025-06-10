let numero = parseInt(prompt("Digite um número inteiro positivo (ou negativo para sair):"));
let maior = numero;
let menor = numero;

while (numero >= 0) {
  if (numero > maior) {
    maior = numero;
  }

  if (numero < menor) {
    menor = numero;
  }

  numero = parseInt(prompt("Digite outro número (ou negativo para sair):"));
}

alert("Maior número: " + maior + "Menor número: " + menor);