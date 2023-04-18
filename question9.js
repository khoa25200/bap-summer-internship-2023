/*
The time complexity of the provided code is O(N), where N is the length of the input string S.
Explanation:
Step 1: Convert the string S into an array of characters. The complexity of this step is O(N), since we have to traverse the entire string S.
Step 2: Check if N is larger than the length of the string S. The complexity of this step is O(1), as it checks only once.
Step 3: Reverse the first N characters of the array. The complexity of this step is O(N), as we have to traverse the first N elements of the array.
Step 4: Concatenate the reversed characters with the remaining characters of the array to create a new array. The complexity of this step is O(N), since we have to create a new array and copy N elements into it.
Step 5: Convert the result array back to a string and return it. The complexity of this step is O(N), since we have to traverse the entire result array to convert it to a string.
Therefore, the overall time complexity of the algorithm is O(N).
*/

function reverseNLetters(S, N) {
  // Convert the string to an array of characters
  const arr = S.split('');
  if (N > S.length) {
    return "Error: N is larger than S's length";
  }
  // Reverse the first N characters of the array
  const reversed = arr.slice(0, N).reverse();

  // Concatenate the reversed characters with the remaining characters of the array
  const outputArr = reversed.concat(arr.slice(N));

  // Convert the array back to a string and return it
  return outputArr.join('');
}

console.log(reverseNLetters("hello world", 3));
// Output: "lehlo world"

console.log(reverseNLetters("hello", 10));
// Output: "Error: N is larger than S's length"
