exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
	indexOf: function(arr, item) {
		return arr.indexOf(item);
	},

	sum: function(arr) {
		return arr.reduce((result, item) => result + item, 0);
	},

	remove: function(arr, item) {
		return arr.filter((i) => i !== item);
	},

	removeWithoutCopy: function(arr, item) {
		while (arr.indexOf(item) !== -1) {
			arr.splice(arr.indexOf(item), 1);
		}
		return arr;
	},

	append: function(arr, item) {
		arr.push(item);
		return arr;
	},

	truncate: function(arr) {
		arr.pop();
		return arr;
	},

	prepend: function(arr, item) {
		arr.unshift(item);
		return arr;
	},

	curtail: function(arr) {
		arr.shift();
		return arr;
	},

	concat: function(arr1, arr2) {
		return arr1.concat(arr2);
	},

	insert: function(arr, item, index) {
		arr.splice(index, 0, item);
		return arr;
	},

	count: function(arr, item) {
		return arr.filter(i => i === item).length;
	},

	duplicates: function(arr) {
		let Obj = arr.reduce((r, i) => {
			r[i] = r[i] ? ++r[i] : 1;
			return r;
		}, {});

		return Object.entries(Obj)
			.filter(entry => entry[1] > 1)
			.map(entry => +entry[0]);
	},

	square: function(arr) {
		return arr.map(item => item * item);
	},

	findAllOccurrences: function(arr, target) {
		return arr.reduce((r, i, index) => {
			if (i === target) {
				r.push(index);
			}
			return r;
		}, []);
	}
};
