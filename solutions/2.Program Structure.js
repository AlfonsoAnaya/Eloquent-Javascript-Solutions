// Exercise 1 - Looping a triangle 
//two ways

for (let string = "#"; string.length < 8; string += "#")
  console.log(string);

let myString = ""
for (let counter=0; counter<7; counter++) {
  	myString += "#"
	console.log(myString)
}

//exercise 2 - FizzBuzz (three different ways)

//shortest
for (let i=1; i<=100; i++) {
    if (i%3 === 0 && i%5 ===0) {
      console.log("fizzbuzz")
    }
    else if (i%3 === 0) {
      console.log("fizz")
    } else if (i%5 ===0) {
        console.log("buzz")
    }
    else {
      console.log(i)
    }
  }

  //clearest
  for (j=1; j<=100; j++) {
    if (j%3===0 && j%5===0) {
      console.log("fizzbuzz");
    } 
    if (j%3===0) {
      console.log("fizz");
    }
    if (j%5===0) {
      console.log("buzz");
    }
    if (j%3!==0 && j%5!==0) {
      console.log(j);
    } 
  }

//without && operator
  for (let k=1; k<=100; k++) {
    if (k%3===0) {
      if (k%5===0) {
        console.log("fizzbuzz");
      } else {
          console.log("Fizz"); 
        }
      } else if (k%5===0) {
      console.log("Buzz");
      } 
    else {
    console.log(k);
      }
  }