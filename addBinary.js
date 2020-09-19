/*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.*/

function addBinary(a,b) {
    var resul, binaryNumber=[],i=0
    
        resul = a + b;
        while (resul != 0){
            binaryNumber[i] = Math.trunc(resul%2)
            resul = Math.trunc(resul/2)
            i++
    }
    
    return (binaryNumber.reverse().join(""))
}
console.log(addBinary(8,7))