const beerUrl = "https://api.punkapi.com/v2/beers";
let allBeers = [];

function createTable(beers) {
    const output = document.getElementById("output");
    output.innerHTML = "";

    // Create a table element
    const table = document.createElement("table");
    
    table.border = "1";
    table.style.borderCollapse = "collapse";

    // Create table headers
    const headers = ["Name", "Tagline", "ABV", "IBU"];
    const headerRow = document.createElement("tr");
    
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Puts data into the table
    beers.forEach(beer => {
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        const cell3 = document.createElement("td");
        const cell4 = document.createElement("td");

        cell1.textContent = beer.name;
        cell2.textContent = beer.tagline;
        cell3.textContent = beer.abv;
        cell4.textContent = beer.ibu;

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);

        table.appendChild(row);
    });

    output.appendChild(table);
}

function filterBeersByABV() {
    const abvValue = parseFloat(document.getElementById("abvFilter").value);

    if (isNaN(abvValue)) { // NaN = Not a Number
        alert("Please enter a valid ABV value.");
        return;
    }
    // Here I filter the beers using the input value (abvValue) & then recreate a new table with the filtered data
    const filteredBeers = allBeers.filter(beer => beer.abv > abvValue);
    createTable(filteredBeers);
}

document.addEventListener("DOMContentLoaded", () => {
    fetch(beerUrl)
        .then(res => res.json())
        .then(beers => {
            allBeers = beers; // Store all beers in a variable
            createTable(allBeers); // Creates a table with all beers
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});