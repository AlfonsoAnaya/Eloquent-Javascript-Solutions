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
  
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(2, 2))
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true