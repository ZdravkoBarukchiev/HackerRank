function diagonalDifference(arr) {
    let array=arr.slice()
    let leftToRightSum = 0
    let rightToLeftSum = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i == j) {
                leftToRightSum += array[i][j]
            }
            if (array.length - 1 - i == j) {
                rightToLeftSum += array[i][j]
            }
        }
    }
    let diff = Math.abs(leftToRightSum - rightToLeftSum)
    return diff
}
diagonalDifference([ [11, 2, 4],
[4, 5, 6],
[10, 8, -12]])