let url = "https://jsonplaceholder.typicode.com/users/";

function fetchUser() {
    const userIdInput = document.getElementById("userIdInput");
    const userId = parseInt(userIdInput.value, 10); // This will get us the id, and secure us that it is below 10

    fetch(url + userId)
        .then(res => res.json())
        .then(data => {
            console.log("data", data);

            // Build the DOM changes using the data
            const userList = document.getElementById("user-list");
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <p>Name: ${data.name}</p>
                <p>Phone: ${data.phone}</p>
                <p>Address: <br> ${data.address.street}, <br> ${data.address.city}, <br> ${data.address.zipcode}</p>
                <p>Geo: Latitude ${data.address.geo.lat}, Longitude ${data.address.geo.lng}</p>
            `;
            userList.innerHTML = ''; // Clear previous user info
            userList.appendChild(listItem);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function getAllUsers() {
    fetch(url)
    .then(res => res.json())
    .then(users => {
        console.log("data", users);

        const userTable = document.createElement("table");
        userTable.className = "user-table";

        // Create table header
        const thead = document.createElement("thead");
        thead.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Phone</th>
            </tr>
        `;
        userTable.appendChild(thead);

        // Create table body
        const tbody = document.createElement("tbody");

        users.forEach(user => {
            const row = document.createElement("tr");

            const tableName = document.createElement("td");
            tableName.textContent = user.name;

            const tablePhone = document.createElement("td");
            tablePhone.textContent = user.phone;

            row.appendChild(tableName);
            row.appendChild(tablePhone);

            tbody.appendChild(row);
        });

        userTable.appendChild(tbody);

        const containerElement = document.getElementById("user-table-container");

        containerElement.appendChild(userTable);
    })
    .catch(error => {
        console.error("Error fetching user data:", error);
    });
}


