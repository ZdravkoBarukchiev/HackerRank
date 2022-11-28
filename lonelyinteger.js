function lonelyInteger(a) {
  return a.find((x) => a.filter((d) => d === x).length === 1);
}
console.log(lonelyInteger([ 0, 0, 1, 2, 1]));
