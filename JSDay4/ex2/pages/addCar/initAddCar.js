import { SERVER_URL } from "../../settings.js";
import { makeOptions } from "../../utils.js";

export function initAddCar() {
  const carForm = document.getElementById("carForm");

  carForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Stops the page from reloading

    const formData = new FormData(carForm); // Creates a new formData object

    const car = { // Here i can now use the .get method to get all the data from my form
      id: formData.get("id"),
      brand: formData.get("brand"),
      model: formData.get("model"),
      pricePrDay: parseFloat(formData.get("pricePrDay")),
      bestDiscount: parseFloat(formData.get("bestDiscount")),
    };

    try { // Here I try adding the car to the server
      const newCar = await addCar(car);
      console.log(newCar); // If succesful it will log this in console
    } catch (error) { // Else this error will print
      console.error("Error adding car:", error);
    }
  });
}

async function addCar(car) { // Now after my try / catch I can now add the car using car the object I just made
  const options = makeOptions("POST", car);

  try {
    const newCar = await fetch(SERVER_URL, options)
      .then((res) => res.json());

    return newCar;
  } catch (error) {
    console.error("Error adding car:", error);
    
    throw error;
  }
}
