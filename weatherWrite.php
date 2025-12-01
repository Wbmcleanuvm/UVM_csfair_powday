<?php
header('Content-Type: application/json');
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);

if (isset($_POST['functionName'])) {
    if ($_POST['functionName'] === 'WritetoCsv') {
        if (isset($_POST['weatherData'])) {
            WritetoCsv($_POST['weatherData']);
        }
    }
    if ($_POST['functionName'] === 'clearCsvCache') {
        clearCsvCache();
    }
}


function clearCsvCache(): void {
    $csv = fopen('storeWeather.csv', 'w');
    fputcsv($csv, [], escape: "");
    fclose($csv);
}
function WritetoCsv($data): void{
    $WeatherData = json_decode($data, true);

    if ($csv = fopen('storeWeather.csv', 'a')){
    for($row = 0; $row < 4; $row++){
        for($col = 0; $col < 3; $col++){
            fputcsv($csv, ["hi"]);
            //fputcsv($csv,$WeatherData[$row][$col], escape: "");
        }
    }
    fclose($csv);
    }else{
        die("you stupid");
    }

}

?>