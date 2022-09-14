function somaEntradas(n1,n2){
    console.log(n1+n2)
}

const n1 = Number(prompt('Forneça o primeiro número de entrada:'))
const n2 = Number(prompt('Forneça o segundo número de entrada:'))

somaEntradas(n1,n2)

////////////////////////////////////////

function maiorOuIgual(n1,n2){
    if(n1 >= n2){
        console.log(true)
    }else{
        console.log(false)
    }
}

maiorOuIgual(n1,n2)

//////////////////////////////////////////

function parOuNao(n){
    if(n%2 === 0){
        console.log(`${n} é par.`)
    }else{
        console.log(`${n} é ímpar.`)
    }
}

let n = Number(prompt('Forneça um número:'))
parOuNao(n)

/////////////////////////////////////////

function tamanhoString(mensagem){
    console.log(`A mensagem \"${mensagem}\" tem o tamanho de ${mensagem.length} caracteres (contando espaços).`)
    console.log(mensagem.toUpperCase())
}

tamanhoString(prompt('Escreva uma mensagem:'))