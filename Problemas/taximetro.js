function solucao(min, km) {
    let valor = 0

    if (min <= 20 & km <= 10) {
        valor = (50 * min) + (70 * km)
    } else if (min > 20 & km <= 10) {
        valor = ((50 * 20) + (30 * (min - 20))) + (70 * km)
    } else if (min <= 20 & km > 10) {
        valor = (50 * min) + ((70 * 10) + (50 * (km - 10)))
    } else {
        valor = ((50 * 20) + (30 * (min - 20))) + ((70 * 10) + (50 * (km - 10)))
    }

    console.log(valor)
}

solucao(20, 20)