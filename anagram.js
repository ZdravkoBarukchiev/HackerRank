function anagram(s) {
    let arr = s.split('')
    if(arr.length%2!==0){
        return -1
    }
    let newArr = []
    let sum = 0
    for (let i = 0; i <= arr.length / 2; i++) {
        let el = arr.shift()
        newArr.push(el)
    }
    for (let j = 0; j < arr.length; j++) {
        if (!arr.includes(newArr[j])) {
            sum++
        }
    }
  
    return sum
}
anagram('abccde')