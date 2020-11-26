function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArray(maxValue, long) {
  var randomArray = [];
  for (let i = 0; i <= long; i++) {
    randomArray[i] = getRandomInt(maxValue);
  }
  return randomArray;
}

function compareArrays(array1, array2) {
  var i = 0,
    band = true;
  if (array1.length == array2.length) {
    while (i <= array1.length - 1 && band) {
      if (array1[i] != array2[i]) {
        band = false;
      }
      i++;
    }
  } else {
    band = false;
  }
  return band;
}

function fillArray(val, long) {
  var arr = [];
  var i;
  for (i = 0; i <= long - 1; i++) {
    arr[i] = val;
  }
  return arr;
}

function perfectIV() {
  const maxStat = 31
  const qtyStats = 6
  var arrRandom = []
  var arrAnswer = []
  var arrRequired = fillArray(31, qtyStats - 1)
  var cont = 0;
  var prob
  do {
      cont++
      arrRandom = getRandomArray(maxStat,qtyStats-1)
      console.log("Test #" + cont + " " +arrRandom)
  } while (!compareArrays(arrRandom, arrRequired));

  prob = 100/cont
  arrAnswer[0] = cont
  arrAnswer[1] = prob
 
  return arrAnswer;
}

var resp = perfectIV()

console.log(resp[0] + "Tries Required// " + resp[1] + "% of probability");