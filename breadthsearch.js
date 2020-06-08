// 广度优先遍历
function breadthsearch(dataSource, goal) {
  // 深拷贝原始数据
  var res = [];
  // 每一层的数据都 push 进 res
  res.push(dataSource);
  console.log(res);
  // res 动态增加长度
  for (var i = 0; i < res.length; i++) {
    var curData = res[i];
    // 匹配成功
    if (curData.value === goal) {
      var result = [];
      // 返回当前对象及其父节点所组成的结果
      return (function findParent(data) {
        result.unshift(data.key);
        if (data.parent) return findParent(data.parent);
        return result;
      })(curData);
    }
    // 如果有 children 则 push 进 res 中待搜索
    if (curData.children) {
      res.push(
        ...curData.children.map((d) => {
          // 在每一个数据中增加 parent，为了记录路径使用
          d.parent = curData;
          return d;
        })
      );
    }
    console.log(res)
  }
  // 没有搜索到结果，默认返回空数组
  return [];
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
console.log(breadthsearch(tree, "6"));
