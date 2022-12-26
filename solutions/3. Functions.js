//3.1 Minimum

function min(a,b) {
    if (a<b) {
      return a
    } else {
      return b
    }
  }
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10

  //3.2 recursion

  function isEven(num) {
	if (num == 0) {
      return true;
    } else if (num == 1) {
      return false;
    } else if (num>0) {
      num -= 2;
    } else {
      num = -num;
    }
  	return isEven(num);
}

console.log(isEven(10));
// → true
console.log(isEven(9));
// → false
console.log(isEven(-4));
// → ??