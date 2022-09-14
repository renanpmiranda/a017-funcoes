const soma = (n1,n2) => {return n1+n2}

const subtracao = (n1,n2) => {return n1-n2}

const multiplicacao = (n1,n2) => {return n1*n2}

const divisao = (n1,n2) => {return n1/n2}

let n1 = Number(prompt('Forneça o primeiro número:'))

let n2 = Number(prompt('Forneça o segundo número:'))

console.log(`${n1} + ${n2} = ${soma(n1,n2)}\n${n1} - ${n2} = ${subtracao(n1,n2)}\n${n1} x ${n2} = ${multiplicacao(n1,n2)}\n${n1} / ${n2} = ${divisao(n1,n2)}`)