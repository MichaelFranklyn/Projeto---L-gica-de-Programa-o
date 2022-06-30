function solucao(precos) {
    let menor = precos[0]
    let soma = 0

    for (i = 0; i < precos.length; i++) {
        if (precos[i] < menor) {
            menor = precos[i]
        }
        soma = soma + precos[i]
    }

    if (precos.length < 3) {
        console.log(soma)
    } else {
        menor = menor * 0.5
        soma = soma - menor
        console.log(soma)
    }
}

solucao([150, 50])