function solucao(texto) {
    let textoArray = texto.trim().split(" ")
    let soma = 0

    for (i = 0; i < textoArray.length; i++) {
        if (textoArray[i] !== "") {
            soma = soma + 1
        }
    }

    console.log(soma)
}

solucao("Um texto qualquer")