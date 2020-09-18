function lengthOfLongestSubstring(string){
    var substring = []
    var length, finallength=0
    for (let i of string){
        if (substring.includes(i)){
            length = substring.length
            if (length > finallength){
                finallength=length
                console.log(substring.join(''))
            }
            substring = []
        }
        substring.push(i)
    }
    
    length = substring.length
    if (length > finallength){
        finallength=length
        console.log(substring.join(''))
    }
   
    return finallength
}


console.log(lengthOfLongestSubstring('abrkaabcdefghij'))