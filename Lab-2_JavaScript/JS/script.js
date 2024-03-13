// Define constructor named ToyCar
function ToyCar(carBrand, carModel, carColor, carPrice, carScale, carMaterial, carFeatures) {
    this.carBrand = carBrand;
    this.carModel = carModel;
    this.carColor = carColor;
    this.carPrice = carPrice;
    this.carScale = carScale;
    this.carMaterial = carMaterial;
    this.carFeatures = carFeatures;
    this.carImage = ''; 
}

// Function for creating a new ToyCar instance
function createToyCarFunction() {

    // car details which is by default for demonstrating
    const carInformation = {
      carImage: document.getElementById("toyCarPhoto").files[0] ? URL.createObjectURL(document.getElementById("toyCarPhoto").files[0]) : 'IMG/car.jpg',
      carBrand: "Mercedes",
      carModel: "Mercedes-Benz AMG",
      carPrice: "$6.99",
      carColor: "Blue",
      carMaterial: "Die-cast metal",
      carScale: "1/36",
      carFeatures: ["Openable doors", "Pull back motor action", "Kinsmart"]
    };

    // Create a new instance
    const toyCar = new ToyCar(
        carInformation.carBrand,
        carInformation.carModel,
        carInformation.carColor,
        carInformation.carPrice,
        carInformation.carScale,
        carInformation.carMaterial,
        carInformation.carFeatures
    );

    // Display all car details with image
    document.getElementById("carImage").src = carInformation.carImage;
    displayCarAllInformation(toyCar);
}


/// Function for updating toy car details
function updateToyCarFunction() {
    const updatedNewCar = new ToyCar(
        document.getElementById("toyCarBrand").value,
        document.getElementById("toyCarModel").value,
        document.getElementById("toyCarColor").value,
        document.getElementById("toyCarPrice").value,
        document.getElementById("toyCarScale").value,
        document.getElementById("toyCarMaterial").value,
        document.getElementById("toyCarFeatures").value.split(',')
    );

    const carPhoto = document.getElementById("toyCarPhoto");
    const carImage = document.getElementById("carImage");

    // reader for reading data
    if (carPhoto.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            carImage.src = e.target.result;
            updatedNewCar.carImage = e.target.result;
        };
        reader.readAsDataURL(carPhoto.files[0]);
    }

    displayCarAllInformation(updatedNewCar);
}


// Function for display toy car details
function displayCarAllInformation(car) {
    const carDetailsSection = document.getElementById("carProperties");
    carDetailsSection.innerHTML = `
      <p><strong>Brand:</strong> ${car.carBrand}</p>
      <p><strong>Model:</strong> ${car.carModel}</p>
      <p><strong>Color:</strong> ${car.carColor}</p>
      <p><strong>Price:</strong> ${car.carPrice}</p>
      <p><strong>Scale:</strong> ${car.carScale}</p>
      <p><strong>Material:</strong> ${car.carMaterial}</p>
      <p><strong>Features:</strong></p>
      <ul>
        ${car.carFeatures.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    `;
}

// Event listener for both click buttons
document.getElementById("createToyCarButton").addEventListener("click", createToyCarFunction);
document.getElementById("updateCarButton").addEventListener("click", updateToyCarFunction);
