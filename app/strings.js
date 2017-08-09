exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    return str.replace(/([a-z])\1+/g, match => match.slice(0, amount));
  },

  wordWrap: function(str, cols) {
    return str.split(' ').reduce((result, item) => {
      if (result.length && item.length + result[result.length - 1].length <= 5) {
        result[result.length - 1] += ` ${item}`;
      } else {
        result.push(item);
      }

      return result;
    }, []).join('\n');
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
