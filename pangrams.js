function pangrams(s) {
    let arr = s.split('')
    let charCodeArr = []
    for (let el of arr) {
        let lowerEl = el.toLowerCase()
        let charCode = lowerEl.charCodeAt()
        if (charCode > 96 && charCode < 123) {
            if (!charCodeArr.includes(charCode)) {

                charCodeArr.push(charCode)
            }
        }

    }
   if(charCodeArr.length==26){
    console.log('pangram');
   }else{
    console.log('not pangram');
   }

}
pangrams('We promptly judged antique ivory buckles for the next prize')