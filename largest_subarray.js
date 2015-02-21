var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var u = find_largest_subarray(arr, 0, arr.length - 1);

console.log(arr.slice(u.lb, u.rb + 1));
console.log('@' + u.sum)

function find_largest_subarray(A, p, r) {
	if (r > p) {
		var q = Math.floor((p + r)/2);
		var a1 = find_largest_subarray(A, p, q);
		var a2 = find_largest_subarray(A, q+1, r);
		var a3 = find_intersecting_subarrays(A, p, q, r);
		if (a1.sum > a2.sum) {
			if (a1.sum > a3.sum) {
				return a1;
			} else {
				return a3;
			}
		} else {
			if (a2.sum > a3.sum) {
				return a2;
			} else {
				return a3;
			}
		}
	} else {
		return {sum:-Infinity};
	}
}

function find_intersecting_subarrays(A, p, q, r) {
	var sum = 0;
	var largest1 = {
		lb:null,
		sum:-Infinity
	}

	var largest2 = {
		rb:null,
		sum:-Infinity
	}
	
	for (var i = 0; i < q - p + 1; i++) {
		sum += A[q - i];
		if (sum > largest1.sum) {
			largest1.sum = sum;
			largest1.lb = q - i;
		}
	}

	sum = 0;
	for (var i = 0; i < r - q; i++) {
		sum += A[q + 1 + i];
		if (sum > largest2.sum) {
			largest2.sum = sum;
			largest2.rb = q + i + 1;
		}
	}

	return {
		lb: largest1.lb,
		rb: largest2.rb,
		sum: largest1.sum + largest2.sum
	};
}