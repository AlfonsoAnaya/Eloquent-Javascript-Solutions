function deepEqual(item1, item2) {
  //first we check if the items passed to the function are both objects, if they're not we jumpt to the else statement
    if ((typeof(item1) === "object" && item1 != null)&& (typeof(item2) === "object" && item1 != null)) {

    //before doing anything we store the keys of each object in a correpsonding array (keys1 and keys 2)
      let keys1 = Object.keys(item1)
      let keys2 = Object.keys(item2) 

      //we check if the objects have the same amount of keys, if they don't then we return false
      if (keys1.length != keys2.length) {
        return false   
      }

      //but if they're the same length, then we look more closely into each pair of keys with a for loop               
      else {
        for (let i=0; i<keys1.length; i++) {

          //first we check for each of the keys names are equal, if they're not we return false
          if (keys1[i] != keys2[i]) {
            return false
          } 

          //but if the keys match, we check if their value is identical by a recursive use of this function (i.e., deepEqual)
          else {
            deepEqual(item1[keys1[i]], item2[keys2[i]])
            //after each call to deepEqual we check if the function returns false, if it does, we break from the loop
            if (!result) break
          }
        }

        /*if the for loop completes without trigerring the break condition it's because result is true, if it meets the break 
        condition then result will be false */
        return result
      }
    }

    /*if the items aren't both objects we can simply do check if they're deeply equal and return the result (stored in "result"
    variable)*/
     else {
      result = (item1 === item2)
      return result
    }
  }
  
  let obj = {here: {is: "an"}, object: 2};

  console.log(deepEqual(2, 3))
  // → false
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true
