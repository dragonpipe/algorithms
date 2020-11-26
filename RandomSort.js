var arregloAOrdenar = [5,2,4,7,8,1,10]

console.log("Trying to Sort the array: " + arregloAOrdenar);
console.log(RandomSort(arregloAOrdenar));
console.log("Finally Sorted!");

function RandomSort(arr){
    var sortedArray = shellSort(arr)
    var randomArr
    var i=0
    do{
        i++
        randomArr= disorderArray(arr)
        console.log("Try Number "+i+": " + randomArr)
    }while(!compareArrays(randomArr,sortedArray))
    return randomArr
}

function shellSort(arr) {
    var increment = arr.length / 2;
    
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
    
            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                j = j - increment;
              }
              
              arr[j] = temp;
            }
            
           
         
            if (increment == 2) {
              increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return arr;
}

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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function disorderArray(arr) {
    var disorderedArr = [];
    var i = 0;
    var copyOfArr = [...arr]
    var originalLength = copyOfArr.length;
    while (copyOfArr.length > 1) {
      var aux = getRandomInt(copyOfArr.length - 1);
      disorderedArr[i] = copyOfArr[aux];
      copyOfArr.splice(aux, 1);
      i++;
    }
    aux = getRandomInt(originalLength);
    disorderedArr.splice(aux, 0, copyOfArr[0]);
    return disorderedArr;
}
  

