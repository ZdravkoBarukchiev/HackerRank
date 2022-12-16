function isValid(s) {
    let obj = {}
    let arr = s.split('')
    while (arr.length > 0) {
        let el = arr.shift()
        let count = 1
        while (arr.includes(el)) {
            let element = arr.find(x => x === el)
            let index = arr.indexOf(element)
            arr.splice(index, 1)
            count++
        }
        obj[el]=count
    }
    let newArr=[]
    for(let key in obj){
        newArr.push(obj[key])
    }
    let num=newArr.shift()
    while (newArr.includes(num)) {
        let element = newArr.find(x => x === num)
        let index = newArr.indexOf(element)
        newArr.splice(index, 1)
    }
    if(newArr.length>1){
        return 'NO'
    }else{
        return'YES'
    }
}
console.log(isValid('abcdefghhgfedecba'))