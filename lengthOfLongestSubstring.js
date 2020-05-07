var lengthOfLongestSubstring = (str) => {
    let obj = [{ str: "", length: 0 }];
    for (let i = 0; i < str.length; i++) {
      if (obj[0].str.indexOf(str[i]) === -1) {
        obj[0].str = obj[0].str + str[i];
        obj[0].length++;
      } else {
        if (obj.length === 1) {
          obj.unshift({ str: str[i], length: 1 });
        } else {
          if (obj[0].length > obj[1].length) {
            obj.pop();
            obj.unshift({ str: str[i], length: 1 });
          } else {
            obj.shift();
            obj.unshift({ str: str[i], length: 1 });
          }
        }
      }
    }
    return obj;
  };

  console.log(lengthOfLongestSubstring('abcdjjkjkacbjd'))