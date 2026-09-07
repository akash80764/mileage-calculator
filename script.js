const vehicleType = document.getElementById("vehicleType");
const brand = document.getElementById("brand");
const model = document.getElementById("model");

const vehicleData = {
    bike: {
        Yamaha: [
            "Yamaha R15 V4",
            "Yamaha R15 V3",
            "Yamaha R15S",
            "Yamaha MT-15",
            "Yamaha MT-03",
            "Yamaha FZ-FI",
            "Yamaha FZS-FI",
            "Yamaha FZ-X",
            "Yamaha R3"
        ],

        "Royal Enfield": [
            "Royal Enfield Classic 350",
            "Royal Enfield Hunter 350",
            "Royal Enfield Bullet 350",
            "Royal Enfield Meteor 350",
            "Royal Enfield Guerrilla 450",
            "Royal Enfield Himalayan 450",
            "Royal Enfield Interceptor 650",
            "Royal Enfield Continental GT 650",
            "Royal Enfield Super Meteor 650",
            "Royal Enfield Shotgun 650"
        ],

        KTM: [
            "KTM Duke 125",
            "KTM Duke 200",
            "KTM Duke 250",
            "KTM Duke 390",
            "KTM RC 125",
            "KTM RC 200",
            "KTM RC 390"
        ],

        Bajaj: [
            "Bajaj Pulsar 125",
            "Bajaj Pulsar 150",
            "Bajaj Pulsar N160",
            "Bajaj Pulsar NS200",
            "Bajaj Pulsar N250",
            "Bajaj Dominar 250",
            "Bajaj Dominar 400"
        ],

        TVS: [
            "TVS Apache RTR 160",
            "TVS Apache RTR 160 4V",
            "TVS Apache RTR 200 4V",
            "TVS Apache RR 310",
            "TVS Raider 125",
            "TVS Ronin"
        ],

        Honda: [
            "Honda Shine 100",
            "Honda Shine 125",
            "Honda SP 125",
            "Honda SP160",
            "Honda Hornet 2.0",
            "Honda CB200X"
        ],

        Hero: [
            "Hero Splendor Plus",
            "Hero Splendor Plus XTEC",
            "Hero HF Deluxe",
            "Hero Passion Plus",
            "Hero Xtreme 125R",
            "Hero Xtreme 160R"
        ],

        Suzuki: [
            "Suzuki Gixxer",
            "Suzuki Gixxer SF",
            "Suzuki V-Strom SX"
        ]
    },

    car: {
        Maruti: [
            "Maruti Swift",
            "Maruti Baleno",
            "Maruti Wagon R",
            "Maruti Brezza",
            "Maruti Fronx"
        ],

        Hyundai: [
            "Hyundai i20",
            "Hyundai Creta",
            "Hyundai Venue",
            "Hyundai Exter"
        ],

        Tata: [
            "Tata Nexon",
            "Tata Punch",
            "Tata Altroz",
            "Tata Tiago"
        ],

        Toyota: [
            "Toyota Innova",
            "Toyota Fortuner",
            "Toyota Glanza",
            "Toyota Hyryder"
        ]
    }
};
vehicleType.addEventListener("change", function () {

    brand.innerHTML = '<option value="">Select brand</option>';
    model.innerHTML = '<option value="">Select model</option>';

    model.disabled = true;

    if (vehicleType.value === "") {
        brand.disabled = true;
        return;
    }

    brand.disabled = false;

    const brands = vehicleData[vehicleType.value];

    Object.keys(brands).forEach(function (brandName) {

        const option = document.createElement("option");

        option.value = brandName;
        option.textContent = brandName;

        brand.appendChild(option);
    });
});


brand.addEventListener("change", function () {

    model.innerHTML = '<option value="">Select model</option>';

    if (brand.value === "") {
        model.disabled = true;
        return;
    }

    model.disabled = false;

    const models = vehicleData[vehicleType.value][brand.value];

    models.forEach(function (modelName) {

        const option = document.createElement("option");

        option.value = modelName;
        option.textContent = modelName;

        model.appendChild(option);
    });
});
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {

    // Get values from the input fields
    const distance = Number(document.getElementById("distance").value);
    const fuel = Number(document.getElementById("fuel").value);
    const price = Number(document.getElementById("price").value);

    // Check whether the values are valid
    if (distance <= 0 || fuel <= 0 || price <= 0) {
        alert("Please enter valid values in all fields.");
        return;
    }

    // Calculate mileage
    const mileage = distance / fuel;

    // Calculate total fuel cost
    const fuelCost = fuel * price;

    // Calculate cost per kilometre
    const costPerKm = fuelCost / distance;

    // Display results
    document.getElementById("mileageResult").textContent =
        mileage.toFixed(2) + " km/L";

    document.getElementById("costResult").textContent =
        "₹ " + fuelCost.toFixed(2);

    document.getElementById("costPerKmResult").textContent =
        "₹ " + costPerKm.toFixed(2);
});
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {

    vehicleType.value = "";

    brand.innerHTML = '<option value="">Select brand</option>';
    brand.disabled = true;

    model.innerHTML = '<option value="">Select model</option>';
    model.disabled = true;

    document.getElementById("distance").value = "";
    document.getElementById("fuel").value = "";
    document.getElementById("price").value = "";

    document.getElementById("mileageResult").textContent = "-- km/L";
    document.getElementById("costResult").textContent = "₹ --";
    document.getElementById("costPerKmResult").textContent = "₹ --";
});
// Dark Mode

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️ Light Mode";
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
    }

});