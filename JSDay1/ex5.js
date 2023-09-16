// First I initialize an object with 
var myObj = {
    name: "Philip Schønning",
    birthday: "May 12, 2001",
    hobby: "Coding",
    email: "philip@gmail.com"
  };
  
  // Here i print the original object using a forloop
  console.log("Original Object:");
  for (var prop in myObj) {
    console.log(prop, myObj[prop]);
  }
  
  // Now i delete the hobby object
  delete myObj.hobby;
  
  // Now i print the hobby property from my object.
  console.log("\nObject after deleting 'hobby' property:");
  for (var prop in myObj) {
    console.log(prop, myObj[prop]);
  }
  
  // Here i add a new property called "location" to my object
  myObj.location = "Copenhagen, Denmark";
  
  // Lastly i print the new object with the new property
  console.log("\nObject after adding 'location' property:");
  for (var prop in myObj) {
    console.log(prop, myObj[prop]);
  }
  