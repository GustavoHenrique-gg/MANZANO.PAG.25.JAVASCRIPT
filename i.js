let num1= parseFloat(prompt("digite o primeiro valor"))

let num2= parseFloat(prompt("digite o segundo valor"))

let maior

let menor

let diferente

if (num1>num2){
    maior=num1
    menor=num2
}
else{
    maior=num2
    menor=num1
}

diferente= maior-menor

alert("a diferença do valor "+num1 + "  e do  " + num2 +  " é " + diferente )