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

//4.3 Lists

//new solution
function arrayToList(array) {
  let list = null;
  for (let i = array.length-1; i>=0; i--) {
    let newObject = {
    	value: array[i],
      	rest: list
    }
    list = newObject;
  }
  return list
}

function listToArray(list) {
  let array = [];
  while (list) {
    array.push(list.value);
  	list=list.rest;
  }
  return array;
}

function prepend(value, list) {
  newList = {
    value: value,
    rest: list  
  }
  list = newList;
  return list;
}

function nth(list, position) {
  let value
  for (i=0; i<=position; i++) {
    if (i==position) {
      value = list.value;
    }
    list = list.rest;
  }
  return value;
}

/*old solution

function arrayToList(arr) {
  arr.reverse()
  let list = null
  for (let item of arr) {
    let newList = {
      value: item,
      rest: list
    }
    list = newList
  }
  return list
}

function listToArray(list) {
  let arr = []
  for (let node = list; node; node=node.rest) {
    arr = [...arr, node.value]
  }
  return arr
}

function prepend(element, list) {
  let newList = {
    value: element,
    rest: list
  }
  return newList
}

function nth(list, num) {
  let index=num
  let result
  for (let node=list; node; node=node.rest) {
    if (index > 0) {
      index = index-1
    } else if (index===0) {
      return result = node.value      
    }
  }
  return result
}
*/

//4.4
//new solution
function deepEqual (a, b) {
  if (typeof(a)==typeof(b)) {
    if (typeof(a)=="object") {
      
      let keys1 = Object.keys(a);
      let keys2 = Object.keys(b);
      
      if (keys1.length!=keys2.length) return false
      
        for (element of keys1) {
          if (!keys2.includes(element) || 
              !deepEqual(a[element], b[element])) return false;
        }
        return true;
           
    } else {
      return (a==b);
    }
  } else {
  return false}
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(2, 1))
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


/*
old solution
function deepEqual(item1, item2) {
  if (typeof(item1) === "object" && typeof(item2) === "object") {
    let keys1 = Object.keys(item1)
  	let keys2 = Object.keys(item2) 
    if (keys1.length != keys2.length) {
      return false                  
    } else {
      for (let i=0; i<keys1.length; i++) {
        
        if (keys1[i] != keys2[i]) {
          console.log("keys names are different")
          return false
        } else {
          deepEqual(item1[keys1[i]], item2[keys2[i]])
          if (!result) break
        }
      }
      return result
    }
  } else {
    result = (item1 === item2)
    return result
  }
}
*/