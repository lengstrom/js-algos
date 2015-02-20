var cases = require('./cases.js');

function insertion_sort(arr) {
	for (var i = 0; i < arr.length; i++) {
		var j = i - 1;
		var num = arr[i];
		while (j > -1 && arr[j] > num) {
			arr[j + 1] = arr[j];
			j--;
		}

		arr[j + 1] = num;
	}

	return arr;
}

cases.run(insertion_sort);