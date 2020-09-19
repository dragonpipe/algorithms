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

var actualArr = [2,3]

console.log(
  "Disordering the array: " + actualArr + " = " + disorderArray(actualArr)
);

