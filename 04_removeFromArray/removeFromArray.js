let removeFromArray = function (arr, ...args) {
  let newArray = [];
  arr.forEach(element => {
    if (!args.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
  //
  //return arr.filter((element) => !args.includes(element));
  //
  // let cleanArr = [];
  // let isInside;
  // for (let i = 0; i < arr.length; i++) {
  //   isInside = false;
  //   for (const arg of args) {
  //     if (arr[i] === arg) {
  //       isInside = true;
  //     }
  //   }
  //   if (isInside === false) {
  //     cleanArr.push(arr[i]);
  //   }
  // }
  // return cleanArr;
};

// Do not edit below this line
module.exports = removeFromArray;
