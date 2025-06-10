// let idade= prompt(" digite sua idade ")

// let mensagem= idade<16 ?"não pode votar ainda ":idade<18 ?"o voto é opcional ":"O voto é obrigatório"
// alert(mensagem)

let numero = parseInt(prompt("Digite em número o mês que você está "))

let mes = numero == 1 ? " estamos em janeiro " :
    numero == 2 ? " estamos em fevereiro" :
        numero == 3 ? "Março " :
            numero == 4 ? "abril" :
                numero == 5 ? " estamos em maior" :
                    numero == 6 ? " estamos em junho" :
                        numero == 7 ? "estamos em julho" :
                            numero == 8 ? " estamos em agosto  " :
                                numero == 9 ? "setembro " :
                                    numero == 10 ? " Outubro " :
                                        numero == 11 ? " vai ser novembro" :
                                            numero == 12 ? " estamos no fim de ano de dezembro " : " número errado "

alert(mes)