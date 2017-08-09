exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
	fizzBuzz: function(num) {
		if (num % 3 === 0 && num % 5 === 0) {
			return 'fizzbuzz';
		} else if (num % 5 === 0) {
			return 'buzz';
		} else if (num % 3 === 0) {
			return 'fizz';
		} else if (typeof num === 'number' && isFinite(num)) {
			return num;
		} else {
			return false;
		}
	}
};
