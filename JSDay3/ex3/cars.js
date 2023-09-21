const carUrl = "http://localhost:8080/api/cars";

function getAllCars() {
    fetch(carUrl)
        .then(res => res.json())
        .then(cars => {
            const output = document.getElementById("output");

            output.innerHTML = "";

            cars.forEach(car => {
                const p = document.createElement("p");
                
                p.textContent = `Brand: ${car.brand}
                                 Model: ${car.model}`;
                output.appendChild(p);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

const btnGetCars = document.getElementById("btn-get-cars");
btnGetCars.addEventListener("click", getAllCars);

function findCarById() {
    const carIdInput = document.getElementById("text-for-id").value;
    const findCarUrl = `http://localhost:8080/api/cars/${carIdInput}`;
    const singleOutput = document.getElementById("singleOutput");
    
    singleOutput.innerHTML = "";

    fetch(findCarUrl)
        .then(res => res.json())
        .then(car => {
            const p = document.createElement("p");

            p.innerHTML = `Brand: ${car.brand}<br />
                            Model: ${car.model}<br />
                            Price: ${car.pricePerDay}`;
            singleOutput.appendChild(p);
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
}

const btnFindCar = document.getElementById("btn-find-car");
btnFindCar.addEventListener("click", findCarById);

function addCar() {
    const carData = {
        id: document.getElementById("id-input").value,
        brand: document.getElementById("brand-input").value,
        model: document.getElementById("model-input").value,
        pricePerDay: document.getElementById("price-input").value,
        bestDiscount: document.getElementById("discount-input").value
    };

    fetch(carUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(carData)
    })
        .then(data => {
            const newCarOutput = document.getElementById("newCarOutput");
            const p = document.createElement("p");

            newCarOutput.innerHTML = "";
            p.textContent = `New car has been created!`;
            newCarOutput.appendChild(p);
        })
        .catch(error => {
            console.error("Error adding car:", error);
        });
}

const btnAddCar = document.getElementById("btn-add-car");
btnAddCar.addEventListener("click", addCar);

function editCar() {
    const carEditIdInput = document.getElementById("text-for-id2").value;
    const editCarUrl = `http://localhost:8080/api/cars/${carEditIdInput}`;
    const editOutput = document.getElementById("editOutput");

    editOutput.innerHTML = "";

    fetch(editCarUrl)
        .then((res) => res.json())
        .then((car) => {
            
            for (const property in car) {
                // Object.hasOwnProperty.call was default when picking "forin". It checks if the property exists in the car object
                // (property !== "id"): This part of the condition checks if the current property is not equal to the string id
                if (Object.hasOwnProperty.call(car, property) && (property !== "id")) {
                    const value = car[property];
                    const label = document.createElement("label");
                    const input = document.createElement("input");

                    label.textContent = property;

                    input.type = "text";
                    input.id = property;
                    input.value = value;

                    label.appendChild(input);
                    editOutput.appendChild(label);
                }
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function submitEditedCar() {
    const carEditIdInput = document.getElementById("text-for-id2").value;
    const editCarUrl = `http://localhost:8080/api/cars/${carEditIdInput}`;
    const newCar = {id: carEditIdInput};
    const inputs = document.querySelectorAll("#editOutput input");

    inputs.forEach(input => {
        newCar[input.id] = input.value;
    });

    fetch(editCarUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCar)
    })
    .then(data => {
        const editOutputSucces = document.getElementById("editOutputSucces");
        const p = document.createElement("p");

        newCarOutput.innerHTML = "";
        p.textContent = `Car has now been updated!`;
        editOutputSucces.appendChild(p);
    })
    .catch(error => {
        console.error("Error editing car:", error);
    });
}

const btnEditSubmitCar = document.getElementById("btn-edit-sbm-car");
btnEditSubmitCar.addEventListener("click", submitEditedCar);
