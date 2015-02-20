module.exports = new (function() {
	this.cases = [
		{
			'set': [1, -2, 99, 957, 2, 8, 3, 6, 2, 9, -1],
			'solution': [-2,-1,1,2,2,3,6,8,9,99,957]
		}
	];

	this.check = function(set, solution) {
		for (var i = 0; i < set.length; i++) {
			if (set[i] !== solution[i]) {
				return false;
			}
		}

		return true;
	}

	this.run = function(fn) {
		for (var i = 0; i < this.cases.length; i++) {
			var deepCopy = [];
			for (var j = 0; j < this.cases[i].set.length; j++) {
				deepCopy[j] = this.cases[i].set[j];
			}


			var candidate = fn(deepCopy);
			
			if (this.check(deepCopy, this.cases[i].solution)) {
				console.log('Case: `' + JSON.stringify(this.cases[i].set) + '` => passed')
			} else {
				console.warn('\nCase: `' + JSON.stringify(this.cases[i].set) + '` => did not pass.');
				console.warn('Err: `' + JSON.stringify(candidate) + '`\n');
			}
		}
	}

})()