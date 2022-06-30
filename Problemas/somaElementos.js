function solucao(lista) {
    let soma = 0

    for (let item of lista) {
        soma = soma + item
    }

    console.log(soma)
}

solucao([1, 2, 3, 4])