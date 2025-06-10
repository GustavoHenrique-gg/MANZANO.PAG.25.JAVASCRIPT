let contador 
let fatorial 
let j 

for( contador=1; contador<11; contador++){
    if (contador % 2 !=0){
        fatorial=1 
    
    for( j=1; j<=contador; j++){
        fatorial= fatorial*j 
    }
    alert("o fatorial de " + contador + " é " + fatorial )
     }    
    
}