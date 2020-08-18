// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: nested function can access the variable external because external is a globally defined variable. the function can always reach up to find pre declared information however a function cannot reach down to find those pre-declared variables. 

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(num){
  let counter = 0 ;
  for(let i = 0; i <= num; i++){
    counter += i;
  }
  return counter;
}

console.log(sumation(4));