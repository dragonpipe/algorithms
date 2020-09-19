function compareArrays(array1,array2){
    var i=0,band=true
    if(array1.length==array2.length){
        while(i<=array1.length-1 && band){
            if(array1[i]!=array2[i]){
                band = false
            }
            i++
        }
    }else{
        band = false
    }
    return band
}
var firstArray = [1,2,3,4,5,6,7,8,9,10,11]
var secondArray= [1,2,3,4,5,6,7,8,9,10,11]
console.log(compareArrays(firstArray,secondArray))