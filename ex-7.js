function isPalindrome(string) {
  // Start coding here

  for (let i = 0; i <= string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }

    return true;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
