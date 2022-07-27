const array = [70,70,80];

function mediaAluno(notas){
    const soma = 0;
    for (let nota of notas){
        soma += nota;
    }
    const media = soma/(notas.length);

    if (media <= 59) return 'F';
    else if (media > 59 && media < 70) return 'D';
    else if (media > 69 && media < 80) return 'C';
    else if (media > 79 && media < 90) return 'B';
    else if (media > 80 && media <= 100) return 'A';
}

console.log(mediaAluno(array));