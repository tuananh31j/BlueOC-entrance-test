const sumOfTopTwoIntegers = (arr) => {
  if (!Array.isArray(arr)) return "Input should be an array of integers";
  if (arr.length < 2) return "Array should contain at least 2 intergers";
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[0] + sortedArr[1];
};
// Test cases
const input1 = [1, 2, 3, 4, 5];
console.log(sumOfTopTwoIntegers(input1)); // Output: 9
const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
console.log(sumOfTopTwoIntegers(input2)); // Output: 17
const input3 = [1, -2];
console.log(sumOfTopTwoIntegers(input3)); // Output: -1
const input4 = [1];
console.log(sumOfTopTwoIntegers(input4)); // Output: 'Array should contain at least 2 intergers'
const input5 = "hello";
console.log(sumOfTopTwoIntegers(input5)); // Output: 'Input should be an array of integers'
