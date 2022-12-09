function flippingMatrix(matrix) {
    let sum = 0
    let newMatrix = []
    for (let i = 0; i < matrix.length; i++) {
        let firstSum = 0
        let secondSum = 0
        for (let j = 0; j < matrix.length / 2; j++) {
            firstSum += matrix[j][i]
            secondSum += matrix[matrix.length - 1 - j][i]
        }
        let currentNum = 0
        if (secondSum > firstSum) {
            for (let a = 0; a < matrix.length / 2; a++) {
                currentNum = matrix[a][i]
                matrix[a][i] = matrix[matrix.length - 1 - a][i]
                matrix[matrix.length - 1 - a][i] = currentNum
            }

        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i]
        let firstSum = 0
        let secondSum = 0
        for (let j = 0; j < row.length / 2; j++) {
            firstSum += row[j]
            secondSum += row[row.length - 1 - j]
        }
        if (firstSum > secondSum) {
            newMatrix.push(row)
        } else {
            let newRow = []
            for (let el of row) {

                newRow.unshift(el)
            }
            newMatrix.push(newRow)
        }
    }


    for (let i = 0; i < newMatrix.length / 2; i++) {
        for (let j = 0; j < newMatrix.length / 2; j++) {
            sum += newMatrix[i][j]
        }
    }

    return sum
}
console.log(flippingMatrix([[112, 42, 83, 119],
[56, 125, 56, 49],
[15, 78, 101, 43],
[62, 98, 114, 108]]))