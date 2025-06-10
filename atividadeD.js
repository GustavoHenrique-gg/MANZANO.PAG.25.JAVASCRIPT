alert(" Media das notas ")

let nota1=parseFloat(prompt(" qual foi sua primeira nota :"));
let nota2=parseFloat(prompt("qual foi sua segunda nota :"));
let nota3=parseFloat(prompt(" qual foi sua terceira nota da escola :"));
let nota4=parseFloat(prompt("qual foi sua quarta nota : "));

let soma=(nota1+nota2+nota3+nota4);
let media=  soma /2;


if (media >7){

    alert(" você passouuu, sua media foi " + media )

} 
else{
    alert(" precisamos calcular com sua nota de exame, para verificamos se sua nota de exame ")
    let novanota=parseFloat(prompt(" digite sua nota de exame "))
    novanota=(novanota+media)/2
    
    if (novanota>=5){
        alert(" você passou com sua nota de exame " + novanota)
    }
}
    