exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let result = [];
    let specifiedDir = data;

    (function getSpecifiedDir(dir, name) {
      return dir.files.forEach((content) => {
        if (name && content.dir === name) {
          specifiedDir = content;
        } else if (typeof content === 'object') {
          getSpecifiedDir(content, name);
        }
      });
    })(data, dirName);

    (function getFilesFromDir(dir) {
      return dir.files.forEach((content) => {
        if (typeof content === 'string') {
          result.push(content);
        } else if (typeof content === 'object') {
          return getFilesFromDir(content);
        }
      });
    })(specifiedDir);

    return result;
  },

  permute: function(arr) {
    let combinations = [];

    (function createCombination(combination = []) {
      arr.forEach(item => {
        if (!combination.includes(item) && combination.length === (arr.length - 1)) {
          combinations.push([...combination, item]);
        } else if (!combination.includes(item)) {
          createCombination([...combination, item]);
        }
      });
    })();

    return combinations;
  },

  fibonacci: function(n) {
    let fibonacciArr = [];

    (function addFibonacciNumber() {
      fibonacciArr.push(
        (fibonacciArr[fibonacciArr.length - 2] || 0) +
        (fibonacciArr[fibonacciArr.length - 1] || 1)
      );

      if (fibonacciArr.length - 1 < n) {
        addFibonacciNumber();
      }
    })();

    return fibonacciArr[n - 1];
  },

  validParentheses: function(n) {
    let combinations = [];
    let parentheses = {0: '(', 1: ')'};
    let arr = Array.from(Array(n * 2)).map((item, index) => index);
    let canParentheseBeApply = (parenthese, parenthesesArr) => {
      let isOpenedParenthese = item => item % 2 === 0;
      let isClosedParenthese = item => item % 2 === 1;
      let openedParentheses = parenthesesArr.filter(isOpenedParenthese);
      let closedParentheses = parenthesesArr.filter(isClosedParenthese);

      return !parenthesesArr.includes(parenthese) &&
        ((isOpenedParenthese(parenthese) && openedParentheses.length < 3) ||
        (isClosedParenthese(parenthese) && closedParentheses.length < openedParentheses.length));
    };

    (function createCombination(combination = []) {
      arr.forEach(item => {
        if (canParentheseBeApply(item, combination) && combination.length === (arr.length - 1)) {
          combinations.push([...combination, item].map(i => parentheses[i % 2]));
        } else if (canParentheseBeApply(item, combination)) {
          createCombination([...combination, item]);
        }
      });
    })();

    return Object.keys(combinations.reduce((result, item, index) => {
      result[item.join('')] = index;
      return result;
    }, {}));
  }
};
