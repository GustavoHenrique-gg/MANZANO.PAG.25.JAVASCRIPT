let  a=parseFloat(prompt("digite o valor de A "));

let b = parseFloat(prompt(" digite o valor de B "));


let c = parseFloat(prompt(" digite o valor de C "));

let maior;

let meio ;

let menor ;

if (a>b && a>c){
    maior= a 
    if(b>c){
        meio=b 
        menor=c
    }
    else{
        meio=c
        menor=a 

    }
}
else if(b>a && b>c){
    maior=b 
    if(a>c){
        meio=a 
        menor=c
    }
    else{
        meio=c
        menor=a
    }
}
else{
    maior=c
    if(a>b){
        meio=a
        menor=b
    }
    else{
        meio=b
        menor=a
    }
}

alert(" os números em ordem é " + menor + " "+ meio +" "+ maior )

