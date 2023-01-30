// old solution 

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