function isPalindrome(string) {
  // Start coding here
  const wordReverse = string.split("").reverse().join("");
  if (wordReverse === string) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false;
