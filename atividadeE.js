alert(" Vamos fazer a atividade de E ")

let a = parseFloat(prompt(" digite o valo de A "));

let b = parseFloat(prompt("digite o valor de B "));

let c = parseFloat(prompt("digite o valor de C"));

let raiz1;
let raiz2;

let delta = (b**2)-(4 * a * c);
if(delta > 0 ){

    raiz1 = (-(b) + Math.sqrt(delta))/ (2 * a) 
    raiz2 = (-(b) - Math.sqrt(delta))/ (2 * a) 
    alert(" o valor da primeira raiz é :"+ raiz1)
    alert(" o valor da segunda raiz é :"+ raiz2)
}
else if (delta==0){
    raiz1 = (-(b) + Math.sqrt(delta))/(2 *a) 

    alert("o valor da raiz é :" + raiz1)

}
else{
    alert(" a equação não tem Raizes reais ")
}


