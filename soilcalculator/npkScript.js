let userEmail;

let state;
let season;
let landArea;
let phInput;
let moisture;
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
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var toolsDropdown = document.getElementById("tools-dropdown");
  var dropdownContent = document.getElementById("tools-dropdown-content");
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

function userCheck() {
  if (!netlifyIdentity.currentUser()) {
    window.location.href = "https://khetguru.netlify.app";
  }
}
document.addEventListener("DOMContentLoaded", userCheck);
setInterval(userCheck, 2666);

function calculations() {
  idealNitrogenForLand = idealNitrogen * landArea;
  idealPhosphorousForLand = idealPhosphorous * landArea;
  idealPotassiumForLand = idealPotassium * landArea;

  totalNitrogen = nitrogen * landArea;
  totalPhosphorous = phosphorous * landArea;
  totalPotassium = potassium * landArea;

  nitrogenDifference = idealNitrogenForLand - totalNitrogen;
  phosphorousDifference = idealPhosphorousForLand - totalPhosphorous;
  potassiumDifference = idealPotassiumForLand - totalPotassium;
  
  nitrogenFertilizer = nitrogenDifference / 0.46;
  phosphorousFertilizer = phosphorousDifference / 0.46;
  potassiumFertilizer = potassiumDifference / 0.5;

  totalNitrogenCost = Math.round(nitrogenFertilizer * fertilizerCostNitrogen);
  totalPhosphorousCost = Math.round(phosphorousFertilizer * fertilizerCostPhosphorous);
  totalPotassiumCost = Math.round(potassiumFertilizer * fertilizerCostPotassium);
  totalCost = totalNitrogenCost + totalPhosphorousCost + totalPotassiumCost;
}

function wheat() {
  idealNitrogen = 120;
  idealPhosphorous = 60;
  idealPotassium = 40;
  calculations();
}

function mustard() {
  idealNitrogen = 120;
  idealPhosphorous = 60;
  idealPotassium = 40;
  calculations();
}

function chickpea() {
  idealNitrogen = 120;
  idealPhosphorous = 60;
  idealPotassium = 40;
  calculations();
}

function barley() {
  idealNitrogen = 120;
  idealPhosphorous = 60;
  idealPotassium = 40;
  calculations();
}

function rice() {
  idealNitrogen = 120;
  idealPhosphorous = 60;
  idealPotassium = 40;
  calculations();
}

function maize() {
  idealNitrogen = 120;
  idealPhosphorous = 60;
  idealPotassium = 40;
  calculations();
}

function sugarcane() {
  idealNitrogen = 120;
  idealPhosphorous = 60;
  idealPotassium = 40;
  calculations();
}

function cotton() {
  idealNitrogen = 120;
  idealPhosphorous = 60;
  idealPotassium = 40;
  calculations();
}

function update() {
  document.getElementById("finalCrop").textContent = finalCrop;

  document.getElementById("idealNitrogen").value = idealNitrogen;
  document.getElementById("idealPhosphorous").value = idealPhosphorous;
  document.getElementById("idealPotassium").value = idealPotassium;

  document.getElementById("nitrogenDifference").value = nitrogenDifference;
  document.getElementById("phosphorousDifference").value = phosphorousDifference;
  document.getElementById("potassiumDifference").value = potassiumDifference;

  document.getElementById("nitrogenFertilizer").value = nitrogenFertilizer;
  document.getElementById("phosphorousFertilizer").value = phosphorousFertilizer;
  document.getElementById("potassiumFertilizer").value = potassiumFertilizer;

  document.getElementById("totalNitrogenCost").value = totalNitrogenCost;
  document.getElementById("totalPhosphorousCost").value = totalPhosphorousCost;
  document.getElementById("totalPotassiumCost").value = totalPotassiumCost;

  document.getElementById("totalCost").value = finalTotalCost;

  document.getElementById("displayNitrogenDifference").textContent = nitrogenDifference;
  document.getElementById("displayPhosphorousDifference").textContent = phosphorousDifference;
  document.getElementById("displayPotassiumDifference").textContent = potassiumDifference;

  document.getElementById("displayNitrogenFertilizer").textContent = Math.round(nitrogenFertilizer);
  document.getElementById("displayPhosphorousFertilizer").textContent = Math.round(phosphorousFertilizer);
  document.getElementById("displayPotassiumFertilizer").textContent = Math.round(potassiumFertilizer);

  document.getElementById("displayTotalNitrogenCost").textContent = Math.round(totalNitrogenCost);
  document.getElementById("displayTotalPhosphorousCost").textContent = Math.round(totalPhosphorousCost);
  document.getElementById("displayTotalPotassiumCost").textContent = Math.round(totalPotassiumCost);

  document.getElementById("displayTotalCost").textContent = Math.round(finalTotalCost);

  document.getElementById("resultsContainer").style.display = "block";
}

function calculate() {
  //state = document.getElementById("state").value;
  season = document.getElementById("season").value;
  landArea = parseFloat(document.getElementById("landArea").value);
  phInput = parseFloat(document.getElementById("phInput").value);
  moisture = parseFloat(document.getElementById("moisture").value);
  nitrogen = parseFloat(document.getElementById("nitrogen").value);
  phosphorous = parseFloat(document.getElementById("phosphorous").value);
  potassium = parseFloat(document.getElementById("potassium").value);

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
    }
    else if (finalTotalCost == val2) {
      finalCrop = "Mustard";
    }
    else if (finalTotalCost == val3) {
      finalCrop = "Chickpea";
    }
    else if (finalTotalCost == val4) {
      finalCrop = "Barley";
    }
  }

  else if (season == "Kharif") {
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
    }
    else if (finalTotalCost == val2) {
      finalCrop = "Maize";
    }
    else if (finalTotalCost == val3) {
      finalCrop = "Sugarcane";
    }
    else if (finalTotalCost == val4) {
      finalCrop = "Cotton";
    }
  }

  if (finalCrop == "Wheat") {
    wheat();
    document.getElementById("img").setAttribute("src", "/images/wheat.jpg");
  }
  else if (finalCrop == "Mustard") {
    mustard();
    document.getElementById("img").setAttribute("src", "/images/mustard.jpg");
  }
  else if (finalCrop == "Chickpea") {
    chickpea();
    document.getElementById("img").setAttribute("src", "/images/chickpea.jpg");
  }
  else if (finalCrop == "Barley") {
    barley();
    document.getElementById("img").setAttribute("src", "/images/barley.jpg");
  }
  else if (finalCrop == "Rice") {
    rice();
    document.getElementById("img").setAttribute("src", "/images/rice.jpg");
  }
  else if (finalCrop == "Maize") {
    maize();
    document.getElementById("img").setAttribute("src", "/images/maize.jpg");
  }
  else if (finalCrop == "Sugarcane") {
    sugarcane();
    document.getElementById("img").setAttribute("src", "/images/sugarcane.jpg");
  }
  else if (finalCrop == "Cotton") {
    cotton();
    document.getElementById("img").setAttribute("src", "/images/cotton.jpg");
  }

  update();
}