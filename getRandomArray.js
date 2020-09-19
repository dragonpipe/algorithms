// Get a random array of numbers which limit is based on a parameter.
// getRandomArray(maxValue,long) "maxValue" = Max value of the numbers in the array. "long" = Quantity of Elements in the array

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function getRandomArray(maxValue,long){
    var randomArray = []
    for (let i=0; i<=long;i++){

        randomArray[i] = getRandomInt(maxValue) 
       
    }
    return randomArray
}

console.log("Random array: " + getRandomArray(10,7))