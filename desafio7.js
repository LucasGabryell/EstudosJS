function somar (limite){
    let somatotal = 0;
    for(let i = 0; i < limite; i++){
        if (limite % 3 === 0){
            limite += somatotal;
        }
        if (limite % 5 === 0){
            limite += somatotal;
        }
    }
}

somar(10)