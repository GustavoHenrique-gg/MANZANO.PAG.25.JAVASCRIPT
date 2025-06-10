alert(" Media das notas ")

let nota1=parseFloat(prompt(" qual foi sua primeira nota :"));
let nota2=parseFloat(prompt("qual foi sua segunda nota :"));
let nota3=parseFloat(prompt(" qual foi sua terceira nota da escola :"));
let nota4=parseFloat(prompt("qual foi sua quarta nota : "));

let soma=(nota1+nota2+nota3+nota4);
let media= (soma /2) 

if (media >5){

    alert(" você passouuu, sua media foi " + media )

} 
else{
    alert(" infelizmente você reprovou, sua media foi de  " + media  )
}