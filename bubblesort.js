var cases = require('./cases.js');

function bubble_sort(A) {
	for (var i = 0; i < A.length; i++) {
		for (var j = A.length - 1; j > i; j--) {
			if (A[j] < A[i]) {
				var temp = A[i];
				A[i] = A[j];
				A[j] = temp;
			}
		}
	}

	return A;
}

cases.run(bubble_sort);