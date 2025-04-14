let altura = parseFloat(prompt("digite a altura da lata de óleo"))

let raio= parseFloat(prompt("digite o valor de raio "))

let volume= Math.PI*raio *altura

alert("o volume em nessa lata de óleo é " + volume.toFixed(2))