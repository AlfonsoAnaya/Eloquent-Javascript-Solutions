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