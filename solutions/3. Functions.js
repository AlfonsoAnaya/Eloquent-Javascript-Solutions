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

//3.3 Bean counting

/* first version
function countBs(string) {
  counter = 0; 
  for (let i=0; i<string.length; i++) {
    if (string[i] == "B") counter++;
  }
  return counter;
}
*/

//second version
function countBs(string) {
  return countChar(string, "B");
}

function countChar(string, char) {
  counter = 0;
  for (let i=0; i<string.length; i++) {
    if (string[i] == char) counter++;
  }
  return counter;
}

console.log(countBs("BYOB at this B&B"));
// → 2
console.log(countChar("kakkerlaksk", "k"));
// → 4