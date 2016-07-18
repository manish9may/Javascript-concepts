var merge = function(A, m, B, n) {
var i = m - 1,j = n - 1, k = m + n - 1;
	while(k >= 0){
		if(j < 0 || (i >= 0 && A[i] > B[j])){
			A[k--] = A[i--]
		}else{
			A[k--] = B[j--]
		}
	}
	return A;
}

console.log('merge([1,2,5,8], 4, [2,4,6,7], 4)       ',merge([1,2,5,8], 4, [2,4,6,7], 4));