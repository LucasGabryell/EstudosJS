let nome = 'Rafael';
let idade = 25;
let estaAprovado = true;
let sobrenome = undefined;

let pessoa = {
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de Souza'

};
console.log(pessoa);

//Arrays

let familia = [26, 45, "Jonathan", 17];
console.log(familia[2]);

//Função

let corSite = "azul";
function resetarCor(cor, tonalidade){
    corSite = cor + tonalidade;
};
console.log(corSite);
resetarCor("vermelho", " claro");
console.log(corSite);

function MultiplicarPorDois(valor){
    return valor*2;
};

let resultado = MultiplicarPorDois(5);
console.log(resultado);


//Operadores de Atribuição

let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

// Tem um cliente, 100 premium, comum

let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

// If Else

let hora = 22;

if (hora > 6 && hora < 12){
    console.log("bom dia")
}
else if (hora > 12 && hora < 18){
    console.log("boa tarde")
}
else {
    console.log("boa noite")
}

// Switch Case

let permissao = 'diretor';

switch (permissao){
    case 'comum':
        console.log('usuário comum')
        break;
    case 'gerente':
        console.log('usuário gerente')
        break;
    case 'diretor':
        console.log('usuário diretor')
        break;
    default:
        console.log("Usuário não conhecido!")
}

// For

for (let i = 0; i < 5; i++){
    console.log("Estou Aprendendo")
}

//While 

let i = 5;

while (i>=1){
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}

//Do While

do {
    console.log('Digitando!');
    i++;
}while(i < 10)

//for-in

const pessoas = {
    nome:"Lucas",
    idade:25
};

for(let chave in pessoas){
    console.log(chave, pessoas.nome);
}

const cores = ["Vermelho", "Azul", "Amarelo"]

for (let indice in cores){
    console.log(indice,cores[indice])
}

//for-of
for (let cor of cores){
    console.log(cor);
}

//Par ou Impar

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