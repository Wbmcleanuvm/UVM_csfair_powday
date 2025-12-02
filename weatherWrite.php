<?php

if (isset($_POST['functionName'])) {
    if ($_POST['functionName'] === 'WritetoCsv') {
        if (isset($_POST['weatherData'])) {
            WritetoCsv($_POST['weatherData']);
        }
    }
    if ($_POST['functionName'] === 'clearCsvCache') {
        clearCsvCache();
    }
    if ($_POST['functionName'] === 'readWeatherCsv'){

    }

}


function clearCsvCache(): void {
    $csv = fopen('storeWeather.csv', 'w');
    fputcsv($csv, [ ], escape: "");
    fclose($csv);
}
function WritetoCsv($data): void{
    $WeatherData = json_decode($data, true);

    if ($csv = fopen('storeWeather.csv', 'w')){
        $i = 0;
        while ($i < count($WeatherData)){
            fputcsv($csv,$WeatherData[$i], escape: "");
            $i++;
        }
    fclose($csv);
    }
   exit();

}

function readWeatherCsv(){
    $data = [];
    if ($csv = fopen('storeWeather.csv', 'r')){
        while (($row = fgetcsv($csv)) !== false) {
            $data[] = $row;
        }
    }
    return $data;
    

}

?>