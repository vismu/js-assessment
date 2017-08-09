exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
	argsAsArray: function(fn, arr) {
		return fn(arr[0], arr[1]);
	},

	speak: function(fn, obj) {
		return fn.call(obj);
	},

	functionFunction: function(str) {
		return function(nextStr) {
			return [str, nextStr].join(', ');
		};
	},

	makeClosures: function(arr, fn) {
		return arr.map((number) => () => fn(number));
	},

	partial: function(fn, str1, str2) {
		return function(str3) {
			return fn(str1, str2, str3);
		};
	},

	useArguments: function(a = 0, b = 0, c = 0, d = 0) {
		return a + b + c + d;
	},

	callIt: function(fn, ...args) {
		return fn.apply(null, args);
	},

	partialUsingArguments: function(fn, ...args) {
		return function(...nextArgs) {
			return fn.apply(null, args.concat(nextArgs));
		};
	},

	curryIt: function(fn) {
		return (a) => (b) => (c) => fn(a, b, c);
	}
};
