//Par ou Impar

function exibirResultado (valor){
    for (let i = 0; i < valor; i++){
        if (i % 2 === 0){
            console.log(i, "PAR")
        }
        else {
            console.log(i, "IMPAR")
        }
    }
}
exibirResultado(6);