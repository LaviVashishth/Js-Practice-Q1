function ToCountEvenOddZero(arr, arr_size)
{
	let even_count = 0;
	let odd_count = 0;
	let zero_count = 0;
	for (let i = 0; i < arr_size; i++) {
		
		if (arr[i] & 1 == 1)
			odd_count++;
	    else if  (arr[i] == 0)
			zero_count++;
		else
			even_count++;
	}
	document.write("Number of even elements = " + even_count
		+ "<br>" + "Number of odd elements = " + odd_count + "<br>" +"Number of zero elements = " + zero_count) ;
}
	let arr = [ 8, 2, 3, 0, 4, 5, 6 , 7, 0];
	let n = arr.length;
	ToCountEvenOddZero(arr, n);