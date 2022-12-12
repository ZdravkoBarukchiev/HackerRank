function maxMin(k, arr) {
    let newArr = []
    for (let i = 0; i <= arr.length - k; i++) {
        let currentArr = []
        for (let j = i; j < k + i; j++) {
            currentArr.push(arr[j])
        }
        currentArr.sort((a, b) => a - b)
        let minNum = currentArr[0]
        let maxNum = currentArr[currentArr.length - 1]
        let diff = maxNum - minNum
        newArr.push(diff)
    }
    newArr.sort((a,b)=>a-b)
    console.log(newArr[0]);
    return newArr[0]

}
maxMin(4, [10
    , 4
    , 1
    , 2
    , 3
    , 4
    , 10
    , 20
    , 30
    , 40
    , 100
    , 200])