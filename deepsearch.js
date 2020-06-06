const res = [];

function deepSearch(dataSource, value) {
    console.log(dataSource)
  if (!dataSource) {
    return;
  }
  res.push(dataSource);
  if (dataSource.children&&dataSource.children.length!=0) return deepSearch(dataSource.children[0], value);

  if (res[res.length - 1].value === value) {
    return res[res.length - 1].key;
  }
  res.pop();
  console.log(res);
  const lastNode = res[res.length - 1];
  console.log(lastNode);
  lastNode.children.shift();
  if (lastNode.children.length !== 0) {
    return deepSearch(lastNode.children[0], value);
  }
  delete lastNode.children;
  return deepSearch(res.pop(), value);
}

const tree = {
  key: "1",
  value: "1",
  children: [
    {
      key: "2",
      value: "2",
      children: [
        { key: "4", value: "4", children: [] },
        { key: "5", value: "5", children: [] },
      ],
    },
    {
      key: "3",
      value: "3",
      children: [{ key: "6", value: "6", children: [] }],
    },
  ],
};

console.log(deepSearch(tree, "6"));
