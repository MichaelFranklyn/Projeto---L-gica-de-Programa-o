function processData(input) {
    let n = 0
    const array = input.split("")

    for (i = 0; i < array.length; i++) {
        if (array[i] === array[i].toUpperCase()) {
            n = n + 1
        }
    }

    if (n === array.length) {
        for (i = 0; i < array.length; i++) {
            array[i] = array[i].toLowerCase()
        }
        const texto = array.join("")
        console.log(texto)
    } else if (n === 0) {
        const texto = array.join("")
        console.log(texto)
    } else {
        if (array[0] === array[0].toLowerCase() & n === array.length - 1) {
            for (i = 0; i < array.length; i++) {
                array[i] = array[i].toLowerCase()
            }
            array[0] = array[0].toUpperCase()
            const texto = array.join("")
            console.log(texto)
        } else {
            const texto = array.join("")
            console.log(texto)
        }
    }
}

processData('cAPS')