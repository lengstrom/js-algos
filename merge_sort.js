var cases = require('./cases.js');

function merge_sort(A, p, r) {
	if (arguments.length == 1) {
		merge_sort(A, 0, A.length - 1)
		return A;
	}

	if (p < r) {
		var split = Math.floor((r + p)/2);
		merge_sort(A, p, split);
		merge_sort(A, split + 1, r);
		merge(A, p, split, r)
	}
}

function merge(A, p, q, r) {
	var a1 = A.slice(p, q+1);
	var a2 = A.slice(q+1, r+1);

	for (i = 0; i < r - p + 1; i++) {
		if (a2.length == 0 || a1[0] < a2[0]) {
			A[p + i] = a1.shift();
		} else {
			A[p + i] = a2.shift();
		}
	}
}

cases.run(merge_sort);