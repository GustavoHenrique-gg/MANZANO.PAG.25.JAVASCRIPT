let base = 3

  

for(expoente=0; expoente<16;expoente++){
    resultado=1; 
    for( contador=1; contador<=expoente;contador++){
        resultado= resultado* base; 
    }

    alert(" 3 elevado a "+ expoente + "="+ resultado )
}