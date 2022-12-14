function palindromeIndex(s){
    let arr=s.split('')
    for(let i=0;i<arr.length;i++){
     if(arr[i]!==arr[arr.length-1-i]){
        return i
     }
    }
    return-1
}
console.log(palindromeIndex('bcbc'))