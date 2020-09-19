/* Find and returns the position of an array with only one element odd or even, 
and the rest are odd or even respectly*/


function iqTest(numbers){
    var contOdd=0,contEven=0
    var band=true
    var i=0
    var positionEven,positionOdd
    for(i=0;i<=2;i++){
      if ((numbers[i]%2)==0){
        contEven += 1
        positionEven = i + 1;
      }else{
        contOdd+=1
        positionOdd = i +1;
      }
    }
    if ((contEven-contOdd)==1){
      return (positionOdd)
    }else if (contOdd-contEven==1){
      return (positionEven)
    }else if (contOdd == 3){
      while(true){
        i++
        if(numbers[i]%2==0){
          return i+1
        }
      }
    }else{
      while(true){
        i++
        if(numbers[i]%2!=0){
          return i+1
        }
      
    }
  }
}

var arreglo = [2,4,6,8,10,11,20,14,16,18,22]
var respuesta = iqTest(arreglo)
console.log(respuesta)