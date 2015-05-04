

function mult(num1,num2) {				//takes 2 parameter						
  var temp1 = inc(num1);					// calls inc function for the first number
  var temp2 = inc(num2);					// calls inc function for the second number
  return temp1 * temp2;					// return the new result
}
function inc(a) {						// increments a given value by 1
  a++;
  return a;								// returns that value 
}
print(mult(2,3));						// calls function
