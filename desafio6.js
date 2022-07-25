//Apenas Strings 

const filme = {
    titulo: "Vigadores",
    ano: 2018,
    diretor: "Robin",
    personagem: 'Thor'
}
function exibirString(obj){
    for (prop in obj){
        if (typeof obj[prop] === 'string'){
            console.log(prop, obj[prop])
        }
    }
}
exibirString(filme)