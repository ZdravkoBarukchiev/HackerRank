function matchingStrings(strings, queries) {
  let result = [];
  for (el of queries) {
    let count = 0;
    for (str of strings) {
      if (el == str) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}
matchingStrings(["ab", "ab", "abc"], ["ab", "abc", "bc"]);
