/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit. */



function persistence(num) {
    
    var array = []
    var resul = 0
    var cont = 0
    var i=0
    while (num >= 10){
        resul = 1
        array = numberSplit(num)
        for (i of array){
            resul *= i 
            
        }
        num = resul
        cont += 1
    }
    return cont
    // If Returns Num, you can get the final number of the operations
}

 

function numberSplit(arr){
    let array = [],i=0
    while(arr!=0){
        array[i] = Math.trunc(arr%10)
        arr = Math.trunc(arr/10)
        i++
    }
    
    return array.reverse()
}

console.log(persistence(277777788888899))
