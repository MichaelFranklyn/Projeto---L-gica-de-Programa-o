function processData(input) {

    const linhas = input.trim().split("\n");
    const senhaCorreta = linhas[0];
    let senhaDigitada = linhas[1];
    let indice = 0
    let z = 0


    for (i = 0; i < senhaCorreta.length; i++) {
        if (senhaDigitada.includes(senhaCorreta[i])) {
            indice = senhaDigitada.indexOf(senhaCorreta[i])
            senhaDigitada = senhaDigitada.substr(indice + 1)
            z = z + 1
        }
    }

    if (z === senhaCorreta.length) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }
}

const input = "cubos\ncuggbyos"

processData(input)