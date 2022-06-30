function solucao(min, max, valores) {
    const listaNova = []

    for (i = 0; i < valores.length; i++) {
        if (valores[i] <= max & valores[i] >= min) {
            listaNova.push(valores[i])
        }
    }

    console.log(listaNova)
}

solucao(2, 10, [0, 5, 6, 10, 11])