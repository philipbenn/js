// ARRAY
const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

const filteredNames = names.filter((name) => name.length <= 3);

filteredNames.forEach((name) => {
  console.log(name);
});

// UPPER CASE NAMES
const upperCaseNames = names.map((name) => name.toUpperCase());

console.log(upperCaseNames);

// CREATE LIST IN HTML
function createNameListHTML(namesHtml) {
  const listNames = names.map((name) => `<li>${name}</li>`);
  const html = `<ul>${listNames.join("")}</ul>`;
  return html;
}

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

const newCars = cars.filter(car => car.year >= 1999);

console.log(newCars);

const volvos = cars.filter(car => car.make === "Volvo");

console.log(volvos);

const carPrice = cars.filter(car => car.price < 5000);

console.log(carPrice);


