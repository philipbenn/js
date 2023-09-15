const msgPrinter = function(msg,delay){
    setTimeout(() => console.log(msg),delay); //Observe an arrow-function
  };
  console.log("aaaaaaaaaa");
  msgPrinter ("bbbbbbbbbb",2000);
  console.log("dddddddddd");
  msgPrinter ("eeeeeeeeee",1000);
  console.log("ffffffffff");

  // This will print a, d, f, e and then b. A will print first because of the order of the code.
  // D will print second becuase its the third in the order, and B has 2000ms delay.
  // F will print third even though its last in the list, because B and E both have delay.
  // E will print fourth because it has less delay than B.
  // Lastly B will print because it has the highest amount of delay.
  