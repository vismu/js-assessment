exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /(\D)\1+/.test(str);
  },

  endsWithVowel: function(str) {
    return /(a|e|i|o|u)$/i.test(str);
  },

  captureThreeNumbers: function(str) {
    return (/\d{3,3}/.exec(str) || [false])[0];
  },

  matchesPattern: function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },

  isUSD: function(str) {
    return /^[$]\d{1,3}?(([,]\d{3}){1,})?([.]\d{2})?$/.test(str);
  }
};
