


let tempogasto=parseFloat(prompt("Digite o tempo gasto na viagem"))

let velocidade=parseFloat(prompt("qual foi a velocidade média durante a viagem "))

let distancia= tempogasto*velocidade

let litrousado= distancia/12

alert("a velocidade média do veiculo foi de "+ velocidade + "Km")

alert("tempo gasto na viagem foi de  "+  tempogasto+ "Horas")

alert(" a distancia foi de  "+  distancia +"Km")

alert(" Litros usados na viagem  "+  litrousado.toFixed(2) + " litros")
