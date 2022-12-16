function isValid(s) {
    let initialLength = s.length
    let arr = s.split('')
    let newArr = []
    while (arr.length > 0) {
        let el = arr.shift()
        let result = arr.find(x => x === el)
        if (!result) {
            newArr.push(el)
        }
    }
    if (initialLength - newArr.length > 1) {
        return 'NO'
    } else {
        return 'YES'
    }
}
console.log(isValid('abcdefghhgfedecba'))