var nums = [1, -2, 99, 957, 2, 8, 3, 6, 2, 9, -1]

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
}

insertion_sort(nums)

console.log(nums);