function solucao(jogadores) {
    let zero = 0
    let um = 0

    for (i = 0; i < jogadores.length; i++) {
        if (jogadores[i].jogada === 1) {
            um = um + 1
        } else {
            zero = zero + 1
        }
    }

    if (zero === 1 & um >= 1) {
        for (i = 0; i < jogadores.length; i++) {
            if (jogadores[i].jogada === 0) {
                console.log(jogadores[i].nome)
            }
        }
    } else if (um === 1 & zero >= 1) {
        for (i = 0; i < jogadores.length; i++) {
            if (jogadores[i].jogada === 1) {
                console.log(jogadores[i].nome)
            }
        }
    } else {
        console.log("NINGUEM")
    }
}

solucao([
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
])