function sockMerchant(n, ar) {
    let num = ar.shift()
    let sum = 0
    while (ar.length > 0) {
        let result = ar.find((x) => x === num)
        let index = ar.indexOf(result)
        if (result) {
            sum++
            ar.splice(index, 1)
        }

        num = ar.shift()
    }
    return sum
}
sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])