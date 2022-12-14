function getTotalX(a, b) {
    let arr = []
    let newArr = []
    let resultArr = []
    for (let j = 0; j < a.length; j++) {
        for (let i = 1; i <= 100; i++) {
            if (i % a[j] === 0) {
                arr.push(i)
            }

        }
    }
    let el = arr.shift()
    while (arr.length > 0) {
        if (arr.includes(el)) {
            newArr.push(el)
        }
        el = arr.shift()
    }
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (b[i] % newArr[j] === 0) {
                resultArr.push(newArr[j]);
            }

        }
    }
    let sum = 0
    let resultEl = resultArr.shift()
    while (resultArr.length > 0) {
        if (resultArr.includes(resultEl)) {
            sum++
        }
        resultEl=resultArr.shift()
    }
    return sum
}
console.log(getTotalX([2, 6], [24, 36]))