function solucao(lista) {
    const maiores = []

    for (i = 0; i < lista.length; i++) {
        if (lista[i] >= 18) {
            maiores.push(lista[i])
        }
    }

    if (maiores.length >= 1) {
        let menor = maiores[0]

        for (x = 0; x < maiores.length; x++) {
            if (maiores[x] < menor) {
                menor = maiores[x]
            }
        }
        console.log(menor)
    } else {
        console.log("CRESCA E APARECA")
    }
}

solucao([12, 18, 27])