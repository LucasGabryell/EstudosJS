//Fizz Buzz
function fizzBuzz(valor){

    if (typeof valor !== 'number'){
        console.log('Não é Número')
    }
    if (valor % 3 === 0 && valor % 5 === 0){
        console.log("FizzBuzz")
    }
    if (valor % 3=== 0){
        console.log("Fizz")
    }
    if (valor % 5 === 0){
        console.log("Buzz")
    return valor;
    }
}

fizzBuzz(11);