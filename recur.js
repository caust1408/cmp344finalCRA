
function recur(num,times) {			// takes parameter of number and the number of times you wish to add that value to itself
	if( times == 1) {				// once it reaches the base case, then it returns the num
		//print(num);
		return num;
	}
	else {
		print('in else');			
		print(num);
		return num + recur(num,times -1);	// where the recursion takes place, it reduces the times by one each time and adding at the same time
	}

}

print(recur(4,3));