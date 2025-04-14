let valor= parseFloat(prompt("digite o valor das suas parcelas"))

let taxa= parseFloat(prompt("qual a taxa por atraso ?"))

let tempo= parseFloat(prompt("digite o tempo em atraso em dias "))

let juros= valor+(valor*taxa/100)*tempo

alert(" O valor da sua parcelas é R$ " +valor )

alert(" O tempo em atraso é  " +tempo + "dias " )

alert(" O valor com juros vai ficar R$ "+ juros  )

