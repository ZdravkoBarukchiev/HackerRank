function plusMinus(arr) {
  let n = arr.length;
  let plusCount = 0;
  let minusCount = 0;
  let zeroCount = 0;
  arr.forEach((element) => {
    if (element < 0) {
      minusCount++;
    } else if (element > 0) {
      plusCount++;
    } else {
      zeroCount++;
    }
  });
  console.log((plusCount / n).toFixed(6));
  console.log((minusCount / n).toFixed(6));
  console.log((zeroCount / n).toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1]);
