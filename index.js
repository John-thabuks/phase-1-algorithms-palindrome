/*Rewrite the Problem in Your Own Words*/
/*
We need to create a JavaScript function called isPalindrome that takes a string as an input.
This function should determine whether the given string is a palindrome. 
A palindrome is a word or phrase that reads the same forwards and backward (ignoring spaces,
  capitalization, and punctuation).
*/



function isPalindrome(word) {
  // Write your algorithm here
  let myword = word.toLowerCase()
  let left = 0
  let right = word.length - 1

  while (left < right) {
    if (myword[left] !== myword[right]) return false
    left++
    right--
  }

  return true
}

console.log(isPalindrome("RACECAR"))
console.log(isPalindrome("robot"))

/* 
  Add your pseudocode here

  Function isPalindrome(word):
  // Step 1: Put a pointer at each extreme of the word
  left = 0
  right = length of word - 1

  // Step 2: Iterate the string "inwards"
  while left is less than right:
    // Step 3: At each iteration, check if the pointers represent equal values
    if word[left] is not equal to word[right]:
      // If this condition isn't accomplished, the word isn't a palindrome
      return false
    Increment left by 1
    Decrement right by 1

  // If the loop completes without finding any unequal characters, it's a palindrome
  return true

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
