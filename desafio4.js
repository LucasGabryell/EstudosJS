//Velocidade Máxima

const velocidadeMax = 70;

function verificarVelocidade(velocidade){
    let pontos = (velocidade - velocidadeMax)/5;
    if (pontos > 12){
        console.log("Carteira Suspendida")
    }
    console.log(pontos);
}

verificarVelocidade(80);