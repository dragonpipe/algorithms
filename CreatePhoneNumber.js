/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. */

function createPhoneNumber(numbers) {
  var number =
    "(" +
    numbers[0] +
    numbers[1] +
    numbers[2] +
    ") " +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    "-" +
    numbers[6] +
    numbers[7] +
    numbers[8] +
    numbers[9];

  return number;
}

console.log(createPhoneNumber([0, 4, 5, 1, 2, 3, 4, 5, 6, 9]));
