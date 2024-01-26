<?php
$email = $_POST['email'];
$selectedState = $_POST['selectedState'];
$currentDate = $_POST['currentDate'];
$landArea = $_POST['landArea'];
$phInput = $_POST['phInput'];
$tdsInput = $_POST['tdsInput'];
$nitrogen = $_POST['nitrogen'];
$phosphorous = $_POST['phosphorous'];
$potassium = $_POST['potassium'];
$season = $_POST['season'];
$idealNitrogen = $_POST['idealNitrogen'];
$idealPhosphorous = $_POST['idealPhosphorous'];
$idealPotassium = $_POST['idealPotassium'];
$nitrogenDifference = $_POST['nitrogenDifference'];
$phosphorousDifference = $_POST['phosphorousDifference'];
$potassiumDifference = $_POST['potassiumDifference'];
$nitrogenFertilizer = $_POST['nitrogenFertilizer'];
$phosphorousFertilizer = $_POST['phosphorousFertilizer'];
$potassiumFertilizer = $_POST['potassiumFertilizer'];
$totalNitrogenCost = $_POST['totalNitrogenCost'];
$totalPhosphorousCost = $_POST['totalPhosphorousCost'];
$totalPotassiumCost = $_POST['totalPotassiumCost'];
$totalCost = $_POST['totalCost'];

if (!empty($email) || !empty($selectedState) || !empty($currentDate) || !empty($landArea) || !empty($phInput) || !empty($tdsInput) || !empty($nitrogen) || !empty($phosphorous) || !empty($potassium) || !empty($season) || !empty($idealNitrogen) || !empty($idealPhosphourous) || !empty($idealPotassium) || !empty($nitrogenDifference) || !empty($phosphorousDifference) || !empty($potassiumDifference) || !empty($nitrogenFertilizer) || !empty($phosphorousFertilizer) || !empty($potassiumFertilizer) || !empty($totalNitrogenCost) || !empty($totalPhosphorousCost) || !empty($totalPotassiumCost) || !empty($totalCost)){
    $host = "sql6.freesqldatabase.com"; 
    $dbUsername = "sql6679871";
    $dbPassword = "myQxpzpPSb";
    $dbname = "sql6679871";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if (mysqli_connect_error()) {
        die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());
    } else {
        $SELECT = "SELECT email From "; 
        $INSERT = "INSERT Into history (email, selectedState, currentDate, landArea, phInput, tdsInput, nitrogen, phosphorous, potassium, season, idealNitrogen, idealPhosphourous, idealPotassium, nitrogenDifference, phosphorousDifference, potassiumDifference, nitrogenFertilizer, phosphorousFertilizer, potassiumFertilizer, totalNitrogenCost, totalPhosphorousCost, totalPotassiumCost, totalCost) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("sssiiiiiisiiiiiiiiiiiii", $email, $selectedState, $currentDate, $landArea, $phInput, $tdsInput, $nitrogen, $phosphorous, $potassium, $season, $idealNitrogen, $idealPhosphourous, $idealPotassium, $nitrogenDifference, $phosphorousDifference, $potassiumDifference, $nitrogenFertilizer, $phosphorousFertilizer, $potassiumFertilizer, $totalNitrogenCost, $totalPhosphorousCost, $totalPotassiumCost, $totalCost);
        $stmt->execute();
        echo "New record inserted sucessfully";
        $stmt->close();
        $conn->close();
    }
} else {
    echo "All fields are required";
    die();
}
?>