
function parimp(s){
    if(s %2 ==0){
        return"par"
    }
    else{
        return"impar"
    }
}

let total 
function soma(s,n){
    total= s+n
    return total
}
let n= parseFloat(prompt("digite um número "))

let s=parseFloat(prompt(" digite outro número"))

let aparecer=parimp(s)

alert(aparecer)
