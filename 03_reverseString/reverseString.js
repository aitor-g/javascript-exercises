const reverseString = function (string) {
  let splittedStr = string.split("");
  let reversedStr = "";
  for (let i = splittedStr.length - 1; i > -1; i--) {
    reversedStr = reversedStr + splittedStr[i];
  }
  return reversedStr
};

// Do not edit below this line
module.exports = reverseString;
