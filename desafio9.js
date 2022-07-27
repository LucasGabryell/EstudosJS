function exibirAsteriscos(linhas){
    let asteriscos = '';
    for(let i = 0; i < linhas; i++){
        asteriscos += i * '*';
        console.log(asteriscos);
    }
}

exibirAsteriscos(10);