let userEmail;

//let state;
let season;
let landArea;
let phInput;
let tds;
let nitrogen;
let phosphorous;
let potassium;

let idealNitrogen;
let idealPhosphorous;
let idealPotassium;

let idealNitrogenForLand;
let idealPhosphorousForLand;
let idealPotassiumForLand;

let totalNitrogen;
let totalPhosphorous;
let totalPotassium;

let nitrogenDifference;
let phosphorousDifference;
let potassiumDifference;

let nitrogenFertilizer;
let phosphorousFertilizer;
let potassiumFertilizer;

const fertilizerCostNitrogen = 60;
const fertilizerCostPhosphorous = 110;
const fertilizerCostPotassium = 100;
const minValue = 0;
const maxPhInput = 14;
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}/${month}/${year}`;
console.log(currentDate);

let totalNitrogenCost;
let totalPhosphorousCost;
let totalPotassiumCost;

let img = new Image();
let finalTotalCost;
let finalCrop;

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("login", (user) => {
    userEmail = user.email;
    document.getElementById("email").value = userEmail;
    document.getElementById("date").value = currentDate;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var toolsDropdown = document.getElementById("tools-dropdown");
  var dropdownContent = document.getElementById("tools-dropdown-content");

  dateCheck();

  toolsDropdown.addEventListener("click", function (event) {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    var isClickInsideDropdown =
      toolsDropdown.contains(event.target) ||
      dropdownContent.contains(event.target);

    if (!isClickInsideDropdown) {
      dropdownContent.style.display = "none";
    }
  });
});

function dateCheck() {
  if (month >= 6 && month <= 10) {
    document.getElementById("season").value = "Kharif"
  } else if (month >= 11 && month <= 12 || month <= 5) {
    document.getElementById("season").value = "Rabi"
  } else {
    document.getElementById("season").value = "Zaid"
  }
} 


function userCheck() {
  if (!netlifyIdentity.currentUser()) {
    window.location.href = "https://khetguru.netlify.app";
  }
}
setInterval(userCheck, 2666);

function phCheck() {
  if (phInput >= 6.2 && phInput <= 7) {
    document.getElementById("pH").textContent = "pH is ideal for crop growth."
  } else if (phInput < 6.2 && phInput >= 5.3) {
    document.getElementById("pH").textContent = "pH is slightly acidic, might affect produce."
  } else if (phInput < 5.3) {
    document.getElementById("pH").textContent = "pH is highly acidic, crop may fail."
  } else if (phInput > 7 && phInput <= 8.5) {
    document.getElementById("pH").textContent = "pH is slightly alkaline, might affect crop."
  } else if (phInput > 8.5) {
    document.getElementById("pH").textContent = "pH is highly alkaline, crop may fail."
  }
}

function tdsCheck() {
  if (tds >= 600 && tds <= 1024) {
    document.getElementById("tds").textContent = "Soil is too dry. Irrigate well."
  } else if (tds < 600 && tds >= 400) {
    document.getElementById("tds").textContent = "Moisture is ideal for crop growth."
  } else if (tds < 400) {
    document.getElementById("tds").textContent = "Soil is too wet."
  }
}

function calculations() {
  idealNitrogenForLand = idealNitrogen * landArea;
  idealPhosphorousForLand = idealPhosphorous * landArea;
  idealPotassiumForLand = idealPotassium * landArea;

  totalNitrogen = nitrogen * landArea;
  totalPhosphorous = phosphorous * landArea;
  totalPotassium = potassium * landArea;

  nitrogenDifference = idealNitrogenForLand - totalNitrogen;
  if (nitrogenDifference < 0) {
    nitrogenDifference = 0;
  }
  phosphorousDifference = idealPhosphorousForLand - totalPhosphorous;
  if (phosphorousDifference < 0) {
    phosphorousDifference = 0;
  }
  potassiumDifference = idealPotassiumForLand - totalPotassium;
  if (potassiumDifference < 0) {
    potassiumDifference = 0;
  }

  nitrogenFertilizer = nitrogenDifference / 0.46;
  phosphorousFertilizer = phosphorousDifference / 0.46;
  potassiumFertilizer = potassiumDifference / 0.5;

  totalNitrogenCost = Math.round(nitrogenFertilizer * fertilizerCostNitrogen);
  totalPhosphorousCost = Math.round(
    phosphorousFertilizer * fertilizerCostPhosphorous
  );
  totalPotassiumCost = Math.round(
    potassiumFertilizer * fertilizerCostPotassium
  );
  totalCost = totalNitrogenCost + totalPhosphorousCost + totalPotassiumCost;
}

function wheat() {
  idealNitrogen = 240;
  idealPhosphorous = 11;
  idealPotassium = 140;
  calculations();
}

function mustard() {
  idealNitrogen = 240;
  idealPhosphorous = 11;
  idealPotassium = 140;
  calculations();
}

function chickpea() {
  idealNitrogen = 240;
  idealPhosphorous = 11;
  idealPotassium = 140;
  calculations();
}

function barley() {
  idealNitrogen = 240;
  idealPhosphorous = 11;
  idealPotassium = 140;
  calculations();
}

function rice() {
  idealNitrogen = 240;
  idealPhosphorous = 11;
  idealPotassium = 140;
  calculations();
}

function maize() {
  idealNitrogen = 240;
  idealPhosphorous = 11;
  idealPotassium = 140;
  calculations();
}

function sugarcane() {
  idealNitrogen = 240;
  idealPhosphorous = 11;
  idealPotassium = 140;
  calculations();
}

function cotton() {
  idealNitrogen = 240;
  idealPhosphorous = 11;
  idealPotassium = 140;
  calculations();
}

function update() {
  document.getElementById("finalCrop").textContent = finalCrop;

  phCheck();
  tdsCheck();

  document.getElementById("idealNitrogen").value = idealNitrogen;
  document.getElementById("idealPhosphorous").value = idealPhosphorous;
  document.getElementById("idealPotassium").value = idealPotassium;

  document.getElementById("nitrogenDifference").value = nitrogenDifference;
  document.getElementById("phosphorousDifference").value =
    phosphorousDifference;
  document.getElementById("potassiumDifference").value = potassiumDifference;

  document.getElementById("nitrogenFertilizer").value = nitrogenFertilizer;
  document.getElementById("phosphorousFertilizer").value =
    phosphorousFertilizer;
  document.getElementById("potassiumFertilizer").value = potassiumFertilizer;

  document.getElementById("totalNitrogenCost").value = totalNitrogenCost;
  document.getElementById("totalPhosphorousCost").value = totalPhosphorousCost;
  document.getElementById("totalPotassiumCost").value = totalPotassiumCost;

  document.getElementById("totalCost").value = finalTotalCost;

  document.getElementById("displayNitrogenDifference").textContent =
    nitrogenDifference;
  document.getElementById("displayPhosphorousDifference").textContent =
    phosphorousDifference;
  document.getElementById("displayPotassiumDifference").textContent =
    potassiumDifference;

  document.getElementById("displayNitrogenFertilizer").textContent =
    Math.round(nitrogenFertilizer);
  document.getElementById("displayPhosphorousFertilizer").textContent =
    Math.round(phosphorousFertilizer);
  document.getElementById("displayPotassiumFertilizer").textContent =
    Math.round(potassiumFertilizer);

  document.getElementById("displayTotalNitrogenCost").textContent =
    Math.round(totalNitrogenCost);
  document.getElementById("displayTotalPhosphorousCost").textContent =
    Math.round(totalPhosphorousCost);
  document.getElementById("displayTotalPotassiumCost").textContent =
    Math.round(totalPotassiumCost);

  document.getElementById("displayTotalCost").textContent =
    Math.round(finalTotalCost);

  document.getElementById("resultsContainer").style.display = "block";
}

function sub() {
  initialiseValues();

  if (
    season == "Select cropping season" ||
    isNaN(landArea) ||
    landArea < minValue ||
    isNaN(phInput) ||
    phInput < minValue ||
    phInput > maxPhInput ||
    isNaN(tds) ||
    tds < minValue ||
    isNaN(nitrogen) ||
    nitrogen < minValue ||
    isNaN(phosphorous) ||
    phosphorous < minValue ||
    isNaN(potassium) ||
    potassium < minValue
  ) {
    alert("Please fill in all required fields with valid values.");
    return; // Stop further execution if validation fails
  }

  if (season == "Rabi") {
    wheat();
    let val1 = totalCost;
    mustard();
    let val2 = totalCost;
    chickpea();
    let val3 = totalCost;
    barley();
    let val4 = totalCost;

    finalTotalCost = Math.min(val1, val2, val3, val4);

    if (finalTotalCost == val1) {
      finalCrop = "Wheat";
    } else if (finalTotalCost == val2) {
      finalCrop = "Mustard";
    } else if (finalTotalCost == val3) {
      finalCrop = "Chickpea";
    } else if (finalTotalCost == val4) {
      finalCrop = "Barley";
    }
  } else if (season == "Kharif") {
    rice();
    let val1 = totalCost;
    maize();
    let val2 = totalCost;
    sugarcane();
    let val3 = totalCost;
    cotton();
    let val4 = totalCost;

    finalTotalCost = Math.min(val1, val2, val3, val4);

    if (finalTotalCost == val1) {
      finalCrop = "Rice";
    } else if (finalTotalCost == val2) {
      finalCrop = "Maize";
    } else if (finalTotalCost == val3) {
      finalCrop = "Sugarcane";
    } else if (finalTotalCost == val4) {
      finalCrop = "Cotton";
    }
  }

  if (finalCrop == "Wheat") {
    wheat();
    document.getElementById("img").setAttribute("src", "/images/wheat.jpg");
  } else if (finalCrop == "Mustard") {
    mustard();
    document.getElementById("img").setAttribute("src", "/images/mustard.jpg");
  } else if (finalCrop == "Chickpea") {
    chickpea();
    document.getElementById("img").setAttribute("src", "/images/chickpea.jpg");
  } else if (finalCrop == "Barley") {
    barley();
    document.getElementById("img").setAttribute("src", "/images/barley.jpg");
  } else if (finalCrop == "Rice") {
    rice();
    document.getElementById("img").setAttribute("src", "/images/rice.jpg");
  } else if (finalCrop == "Maize") {
    maize();
    document.getElementById("img").setAttribute("src", "/images/maize.jpg");
  } else if (finalCrop == "Sugarcane") {
    sugarcane();
    document.getElementById("img").setAttribute("src", "/images/sugarcane.jpg");
  } else if (finalCrop == "Cotton") {
    cotton();
    document.getElementById("img").setAttribute("src", "/images/cotton.jpg");
  }

  update();
}

function initialiseValues() {
  //state = document.getElementById("state").value;
  season = document.getElementById("season").value;
  landArea = parseFloat(document.getElementById("landArea").value);
  phInput = parseFloat(document.getElementById("phInput").value);
  tds = parseFloat(document.getElementById("tdsInput").value);
  nitrogen = parseFloat(document.getElementById("nitrogen").value);
  phosphorous = parseFloat(document.getElementById("phosphorous").value);
  potassium = parseFloat(document.getElementById("potassium").value);
}
