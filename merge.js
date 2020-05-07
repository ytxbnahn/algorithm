function mergeArr(arr) {
  let temp = [];
  arr.forEach((element) => {
    temp = temp.concat(element);
  });

  return temp.sort((a, b) => a - b);
}
console.log(
  mergeArr([
    [1, 2, 3, 4],
    [2, 4, 6],
  ])
);
