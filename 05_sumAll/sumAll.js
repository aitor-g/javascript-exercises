const sumAll = function (parOne, parTwo) {
  let lowNum, bigNum;
  if (parOne < 0 || parTwo < 0 || typeof parOne !== "number" || typeof parTwo !== "number") return "ERROR";

  if (parOne <= parTwo) {
    lowNum = parOne;
    bigNum = parTwo;
  } else {
    bigNum = parOne;
    lowNum = parTwo;
  }

  let sumatory = 0;
  for (let i = lowNum; i <= bigNum; i++) {
    sumatory += i;
  }
  return sumatory;
};

sumAll(1, 3);
// Do not edit below this line
module.exports = sumAll;
