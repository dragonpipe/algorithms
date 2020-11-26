function isPalindrome(word) {
  const lowerCased = word.toLowerCase();
  const splitted = lowerCased.split(" ");
  const joined = splitted.join("");
  var i, j, band;
  i = 0;
  j = joined.length - 1;
  band = true;

  while (i <= (joined.length - 1) / 2 && band) {
    if (joined[i] != joined[j]) {
      band = false;
    }
    i++;
    j--;
  }
  return band;
}

var actualWord = "Anita Lava La TinA";
console.log(isPalindrome(actualWord));
console.log(actualWord);
