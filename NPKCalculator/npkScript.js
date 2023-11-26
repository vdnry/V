let userEmail;

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("login", (user) => {
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
  var idealNitrogenForLand = Math.round(idealNitrogen * landArea);
  var idealPhosphorousForLand = Math.round(idealPhosphorous * landArea);
  var idealPotassiumForLand = Math.round(idealPotassium * landArea);

  // Calculate total nutrients in land
  var totalNitrogen = Math.round(nitrogen * landArea);
  var totalPhosphorous = Math.round(phosphorous * landArea);
  var totalPotassium = Math.round(potassium * landArea);

  // Calculate nutrient differences
  var nitrogenDifference = Math.round(idealNitrogenForLand - totalNitrogen);
  var phosphorousDifference = Math.round(idealPhosphorousForLand - totalPhosphorous);
  var potassiumDifference = Math.round(idealPotassiumForLand - totalPotassium);

  // Calculate fertilizer requirements
  var nitrogenFertilizer = Math.round(nitrogenDifference / 0.46);
  var phosphorousFertilizer = Math.round(phosphorousDifference / 0.46);
  var potassiumFertilizer = Math.round(potassiumDifference / 0.5);

  // Calculate approximate cost per hectare
  var fertilizerCostNitrogen = 60;
  var fertilizerCostPhosphorous = 110;
  var fertilizerCostPotassium = 100;

  //Calculate total cost for land
  var totalNitrogenCost = Math.round(nitrogenFertilizer * fertilizerCostNitrogen);
  var totalPhosphorousCost = Math.round(phosphorousFertilizer * fertilizerCostPhosphorous);
  var totalPotassiumCost = Math.round(potassiumFertilizer * fertilizerCostPotassium);
  var totalCost = Math.round(totalNitrogenCost + totalPhosphorousCost + totalPotassiumCost);

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