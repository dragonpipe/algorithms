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

function longestPalindrome(word) {
  var i, j;
  var max = [];
  var actual = [];
  for (j = 0; j <= word.length - 1; j++) {
    for (i = j; i <= word.length - 1; i++) {
      actual.push(word[i]);
      if (isPalindrome(actual.join("")) && actual.length > max.length) {
        max = [...actual];
      }
    }
    actual = [];
  }
  if (max[0] == " "){
      max.splice(0,1)
  }
  return max.join("");
}
var actualWord = "The standard Lorem Ipsum passage, used since the 1500 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium";

console.time("Execution Time")
console.log(longestPalindrome(actualWord));
console.timeEnd("Execution Time")
