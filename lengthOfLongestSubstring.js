function lengthOfLongestSubstring(string){
    var substring = []
    var character,length, finallength=0
    for (character of string){
        if (substring.includes(character)){
            length = substring.length
            if (length > finallength){
                finallength=length   
            }
            substring = []
        }
        substring.push(character)
    }
    length = substring.length
    if (length > finallength){
        finallength=length
    }
   
    return finallength
}


console.log(lengthOfLongestSubstring(''))
console.log(lengthOfLongestSubstring('abrkaabcdefghj'))