function solucao(lista) {
    let media = 0
    let soma = 0

    for (let item of lista) {
        soma = soma + item
    }

    media = soma / lista.length

    console.log(media)
}

solucao([2, 3, 4])