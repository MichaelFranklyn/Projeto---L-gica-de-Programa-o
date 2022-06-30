function solucao(input) {
    const linhas = input.trim().split("\n")
    const n = parseFloat(linhas[0])
    const resultado = []
    const coordenadas = []
    let maior = 0

    for (i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ")
        coordenadas.push(
            {
                x: parseFloat(coord[0]),
                y: parseFloat(coord[1])
            })
    }

    for (i = 1; i < coordenadas.length; i++) {
        let z = i
        while (z > 0) {
            const deltaX = Math.pow(coordenadas[i].x - coordenadas[z - 1].x, 2)
            const deltaY = Math.pow(coordenadas[i].y - coordenadas[z - 1].y, 2)
            const valor = Math.sqrt(deltaX + deltaY)
            resultado.push(valor)
            z = z - 1
        }
    }

    for (i = 0; i < resultado.length; i++) {
        if (resultado[i] >= maior) {
            maior = resultado[i]
        }
    }

    console.log(maior)
} 

const input = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7"

solucao(input)