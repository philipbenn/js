//Observe: no return type, no type on parameters
function add(n1, n2) {
  return n1 + n2;
}

const sub = function (n1, n2) {
  return n1 - n2;
};

const cb = function (n1, n2, callback) {
  return (
    "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2)
  );
};

/* console.log(add(1,2));       // What will this print? = 3
console.log(add);            // What will it print and what does add represent? = It will just show the function, not the result.
console.log(add(1,2,3)) ;    // What will it print = It will take the two first parameters and skip the third so it will equal 3.
console.log(add(1) );	       // What will it print = NaN because the parameter n2 is undefined. 	
console.log(cb(3,3,add));    // What will it print = It will print xx 3 xx 3 = 6
console.log(cb(4,3,sub));    // What will it print = Same as above it will return the string numbers and functions just with substraction.
console.log(cb(3,3,add()));  // What will it print (and what was the problem) = You will get an error because the parameter function has no parameters
console.log(cb(3,"hh",add)); // What will it print = It will print the string followed by 3 and hh it will equal 3hh */

// MULTIPLIER
function mul(n1, n2) {
  return n1 * n2;
}

console.log(cb(1, 2, mul));

const division = function (n1, n2) {
  return n1 / n2;
};

console.log(division(10, 2));
