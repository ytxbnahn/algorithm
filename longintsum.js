function add(num2, num1) {
  let numArr1 = num1.split(""),
    numArr2 = num2.split(""),
    res = [],
    flag = 0,
    sum = 0;
  while (numArr1.length > 0 || numArr2.length > 0) {
    sum =
      Number.parseInt(numArr1.pop() || "0") +
      Number.parseInt(numArr2.pop() || "0") +
      flag;
    flag = parseInt(sum / 10);
    res.push(sum % 10);
  }
  return [...res, flag || ""].reverse().join("");
}
console.log(add('231232132112','1232142214125'))