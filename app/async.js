exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
	async: function(value) {
		return Promise.resolve(value);
	},

	manipulateRemoteData: function(url) {
		return fetch(url)
			.then((result) => result.json())
			.then((response) => response
				.people
				.map(human => human.name)
				.sort()
			);
	}
};
