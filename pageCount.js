function pageCount(n, p) {
  let firstSideCount = p / 2;
  let lastSideCount = (n - p) / 2;
  if (firstSideCount > lastSideCount) {
    let firstRes = Math.floor(lastSideCount);
    if (firstRes === 0) {
      firstRes = 1;
    }
    return firstRes;
  } else {
    let lastRes = Math.floor(firstSideCount);
    if (lastRes === 0) {
      lastRes = 1;
    }
    return lastRes;
  }
}
console.log(pageCount(6, 5));
