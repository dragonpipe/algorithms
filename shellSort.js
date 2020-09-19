function shellSort(arr) {
  var increment = arr.length / 2;
  var pasada = 1;
  console.log("Arreglo Desordenado: "+arr)
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
          
          console.log("Pasada Numero "+ pasada + ": " +arr)
          pasada++
          if (increment == 2) {
            increment = 1;
      } else {
          increment = parseInt(increment*5 / 11);
      }
  }
return arr;
}

console.log("Arreglo Ordenado: "+shellSort([5,2,4,6]))

