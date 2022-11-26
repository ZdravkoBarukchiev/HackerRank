function minMaxSum(arr) {
  let newArr = arr.sort((a, b) => a - b);
  let minArr = [];
  let maxArr = [];
  for (let i = 1; i < newArr.length; i++) {
    maxArr.push(newArr[i]);
    minArr.push(newArr[i - 1]);
  }
  let minSum = 0;
  minArr.forEach((el) => (minSum += el));
  let maxSum = 0;
  maxArr.forEach((el) => (maxSum += el));
  console.log(minSum, maxSum);
}
minMaxSum([1, 3, 5, 7, 9]);
