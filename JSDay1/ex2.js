// ARRAY
const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

// Here I filter the array of names to only contain names with a length thats less than or equals 3
const filteredNames = names.filter((name) => name.length <= 3);

// Then I iterate through the list of filtered names and print them
filteredNames.forEach((name) => {
  console.log(name);
});

// I take all the names and map them so the names will print in uppercase
const upperCaseNames = names.map((name) => name.toUpperCase());

console.log(upperCaseNames);

// Here i create a list of names and print them in html. So when I map them i map them into a list (<li>)
// Then i take the list of names that are put into a <li> and joins them into the <ul> which is the unordered list
function createNameListHTML(namesHtml) {
  const listNames = names.map((name) => `<li>${name}</li>`);
  const html = `<ul>${listNames.join("")}</ul>`;
  return html;
}

// So now when i log the result in html it will print the data in a list instead of printing it in the terminal
const namesHtml = ["Lars", "Peter", "Jan", "Ian"];
const resultHTML = createNameListHTML(namesHtml);
console.log(resultHTML);

// CARS ARRAY
const cars = [
  { id: 1, year: 1997, make: "Ford", model: "E350", price: 3000 },
  { id: 2, year: 1999, make: "Chevy", model: "Venture", price: 4900 },
  { id: 3, year: 2000, make: "Chevy", model: "Venture", price: 5000 },
  { id: 4, year: 1996, make: "Jeep", model: "Grand Cherokee", price: 4799 },
  { id: 5, year: 2005, make: "Volvo", model: "V70", price: 44799 },
];

// Filtering cars using the filter method so i only get the cars that are newer than the from the year 1999 or is from the year 1999
const newCars = cars.filter(car => car.year >= 1999);

console.log(newCars);

// Here i filter it so it only gets the cars who has the brand volvo
const volvos = cars.filter(car => car.make === "Volvo");

console.log(volvos);

// Here i filter it so I only get the cars which has a lower price than 5000
const carPrice = cars.filter(car => car.price < 5000);

console.log(carPrice);


