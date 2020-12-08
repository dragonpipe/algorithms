// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
    let array = []
    if(str!=""){
        array = str.match(/.{1,2}/g)
        if(array[array.length-1].length==1){
            array[array.length-1] += "_"
        }
    }
    return array
}