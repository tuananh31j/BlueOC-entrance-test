const mostFrequentStringLengths = (strings) => {
  if (!Array.isArray(strings)) return "Input should be an array of strings";
  const stringLength = {};
  let stringLengthFrequency = 0;
  let mostStringLength = null;

  strings.forEach((string) => {
    const length = string.length;
    if (stringLength[length]) {
      stringLength[length]++;
    } else {
      stringLength[length] = 1;
    }
  });
  for (let [lengthString, frequency] of Object.entries(stringLength)) {
    if (frequency > stringLengthFrequency) {
      stringLengthFrequency = frequency;
      mostStringLength = parseInt(lengthString);
    }
  }
  return strings.filter((str) => str.length === mostStringLength);
};
// Test cases
const input1 = ["a", "ab", "abc", "cd", "def", "gh"];
console.log(mostFrequentStringLengths(input1)); // Output: ['ab', 'cd', 'gh']

const input2 = ["hello", "world", "test", "example", "code"];
console.log(mostFrequentStringLengths(input2)); // Output: ['test', 'code']

const input3 = ["a", "aa", "aaa", "aaaa", "aaaaa"];
console.log(mostFrequentStringLengths(input3)); // Output: ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']
