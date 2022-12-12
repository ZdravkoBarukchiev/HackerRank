function readLine(grid) {
    let newArr = []
    for (let el of grid) {
        el = el.split('').sort((a, b) => a.localeCompare(b))
        newArr.push(el)
    }
    let originArr = []
    for (let i = 0; i < newArr.length; i++) {
        let col = []
        for (let j = 0; j < newArr.length; j++) {
            col.push(newArr[j][i])
        }
        originArr.push(col.join(''))
    }
    for(let i=0;i<originArr.length;i++){
        let el=originArr[i]
        let sortedEl=el.split('').sort((a,b)=>a.localeCompare(b)).join('')
        console.log(sortedEl,el);
        if(el!==sortedEl){
            return 'NO'
        }
    }
    return'YES'

}
readLine(['acb', 'are', 'efg']);