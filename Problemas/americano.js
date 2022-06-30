function solucao(numeros) {
    let soma = 0
    let posicao = 0

    for (i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i]
    }

    if (soma % numeros.length === 0) {
        posicao = numeros.length
    } else {
        posicao = soma % numeros.length
    }

    console.log(posicao)
}

solucao([1, 3, 2, 1])