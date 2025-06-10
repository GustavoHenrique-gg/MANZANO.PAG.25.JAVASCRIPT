let base= parseInt(prompt(" digite o valor da base "))

let expoente = parseInt(prompt("digite o valor do expoente "))

let resultado= 1

let contador 
for( contador=1 ; contador<=expoente; contador++){
    resultado= resultado* base

}
alert(" o resultado da base de "+ base +" com o expoente "+expoente + " é = " + resultado )