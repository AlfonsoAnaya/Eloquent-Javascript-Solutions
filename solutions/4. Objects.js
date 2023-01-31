//4.1 the sum of a range
// new solution

  function range(start, end, step) {
    let numCollection = []
    if (step == null && start < end) step =1;
    if (step == null && start > end) step =-1;
    
    if (step > 0) {
        for (let i=start; i<=end; i+=step) {
        numCollection.push(i);
      }
    }
    if (step < 0) {
        for (let i=start; i>=end; i+=step) {
        numCollection.push(i);
      }
    }
    return numCollection;
  }
  
  function sum(array) {
    total = 0;
    for (num of array) {
      total += num
    }
    return total;
  }
  
  console.log(range(1, 12,2));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum([5, 4, 3, 2]))
  console.log(sum(range(1, 11, 1)));
  // → 55
  console.log(sum(range(9, 2)));

  // old solution 
/*
function range(start, end, step) {
    let arr = []
    if (start<end) {
      for (i=start; i<=end; i=i+step) {
          if (i <= end) {
            arr.push(i)
           }
        }
    } else if (start>end) {
        for (i=start; i>=end; i=i+step) {
        if (i>=end) {
          arr.push(i)
            }
        }
    }
    return arr
  }
  
  function sum(array) {
    let total = 0
    for (let num of array) {
      total = total + num
    }
    return total
  }
  */

//4.2 reversing an array

//new Solution
function reverseArray(array) {
  let newArray = [];
  for (let i=0; i<array.length; i++) {
  	newArray.unshift(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (let i=0; i<Math.floor(array.length/2) ; i++) {
	let firstHalf = array[i];
    let lastHalf = array[array.length-1-i];
    array[i] = lastHalf;
    array[array.length-1-i] = firstHalf;
  }
  return array;
}

/* old solution 
function reverseArray(arr) {
  let newArr = [];
  for (let i=0; i<arr.length; i++) {
    newArr.unshift(arr[i]);
  }
  return newArr
}

function reverseArrayInPlace(array) {
  let arrayHalfLength = Math.floor(array.length/2)-1
  for (let i=0; i<=arrayHalfLength; i++) {
   let lastValue = array[array.length-1-i];
   let firstValue = array[i];
   array[i] = lastValue
   array[array.length-1-i] = firstValue
  }
  return arrayValue
}
*/