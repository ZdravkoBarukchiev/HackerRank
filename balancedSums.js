function balancedSums(arr) {
    for (let i = 0; i < arr.length; i++) {
        let firstSum = 0;
        let secondSum = 0;
        for (let j = 0; j < i; j++) {
            firstSum += arr[j];
        }
        for (let k = i + 1; k < arr.length; k++) {
            secondSum += arr[k];
        }
        if (firstSum == secondSum) {
            return 'YES';
        }
    }
    return 'NO';
}
console.log(balancedSums([5, 6, 8, 11]))