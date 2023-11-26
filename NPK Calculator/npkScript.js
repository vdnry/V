let userEmail

if (window.netlifyIdentity) {
  window.netlifyIdentity.on('login', user => {
    userEmail = user.email;
  });
}

function userCheck() {
    if (!netlifyIdentity.currentUser()) {
      window.location.href = "https://khetguru.netlify.app";
    }
  }
  document.addEventListener("DOMContentLoaded", userCheck);
  setInterval(userCheck, 2666);

function calculate() {
  // Get user input values
  var landArea = parseFloat(document.getElementById("landArea").value);
  var nitrogen = parseFloat(document.getElementById("nitrogen").value);
  var phosphorous = parseFloat(document.getElementById("phosphorous").value);
  var potassium = parseFloat(document.getElementById("potassium").value);

  // Define ideal nutrient levels
  var idealNitrogen = 120;
  var idealPhosphorous = 60;
  var idealPotassium = 40;

  // Calculate ideal nutrient levels for land
  var idealNitrogenForLand = idealNitrogen * landArea;
  var idealPhosphorousForLand = idealPhosphorous * landArea;
  var idealPotassiumForLand = idealPotassium * landArea;

  // Calculate total nutrients in land
  var totalNitrogen = nitrogen * landArea;
  var totalPhosphorous = phosphorous * landArea;
  var totalPotassium = potassium * landArea;

  // Calculate nutrient differences
  var nitrogenDifference = idealNitrogenForLand - totalNitrogen;
  var phosphorousDifference = idealPhosphorousForLand - totalPhosphorous;
  var potassiumDifference = idealPotassiumForLand - totalPotassium;

  // Calculate fertilizer requirements
  var nitrogenFertilizer = nitrogenDifference / 0.46;
  var phosphorousFertilizer = phosphorousDifference / 0.46;
  var potassiumFertilizer = potassiumDifference / 0.5;

  // Calculate approximate cost per hectare
  var fertilizerCostNitrogen = 60;
  var fertilizerCostPhosphorous = 110;
  var fertilizerCostPotassium = 100;

  //Calculate total cost for land
  var totalNitrogenCost = nitrogenFertilizer * fertilizerCostNitrogen;
  var totalPhosphorousCost = phosphorousFertilizer * fertilizerCostPhosphorous;
  var totalPotassiumCost = potassiumFertilizer * fertilizerCostPotassium;
  var totalCost = totalNitrogenCost + totalPhosphorousCost + totalPotassiumCost;

  // Update hidden fields

  document.getElementById("email").value = userEmail;

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

  document.getElementById("totalCost").value = totalCost;
  // Update displayed results in the separate div element
  // document.getElementById("displayIdealNitrogen").textContent = idealNitrogen;
  // document.getElementById("displayIdealPhosphorous").textContent = idealPhosphorous;
  // document.getElementById("displayIdealPotassium").textContent = idealPotassium;

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
    Math.round(totalCost);

  // Show the results container div
  document.getElementById("resultsContainer").style.display = "block";
}