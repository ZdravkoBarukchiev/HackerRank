function findMedian(arr){
    let newArr=arr.sort((a,b)=>a-b)
    let medianIndex=Math.floor(newArr.length/2)
    let median=newArr[medianIndex]
    return median

}
findMedian([5,3,2,1,4])