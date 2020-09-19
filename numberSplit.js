/* classic Split function to Numbers.*/ 

export function numberSplit(arr){
    let array = [],i=0
    while(arr!=0){
        array[i] = Math.trunc(arr%10)
        arr = Math.trunc(arr/10)
        i++
    }
    
    return array.reverse()
}
