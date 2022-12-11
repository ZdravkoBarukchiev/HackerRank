function caesarCipher(s, k) {
  let arr = s.split("");
  let numArr = [];
  let charArr = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i].charCodeAt();
    if (num > 96 && num < 123) {
      num += k;
      if (num > 122) {
        let diff = num - 122;
        num = 96 + diff;
      }
      numArr.push(num);
    } else if (num > 64 && num < 91) {
      num += k;
      if (num > 90) {
        let diff = num - 90;
        num = 64 + diff;
      }
      numArr.push(num);
    } else {
      numArr.push(num);
    }
  }
  for (let num of numArr) {
    let char = String.fromCharCode(num);
    charArr.push(char);
  }
  return charArr.join("");
}
console.log(caesarCipher("1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M", 3));
