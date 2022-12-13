function superDigit(n, k) {
    let string = '';
    for (let i = 0; i < k; i++) {
        string += n;
    }
    while (string.length > 1) {
        let sum = 0;
        for (let el of string) {
            sum += Number(el);
        }
        string = String(sum);
    }
    return string;
} 
console.log (superDigit('9875', 4))