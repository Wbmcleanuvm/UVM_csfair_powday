<?php

$name = "name";
// Open the CSV file in append mode
$csv = fopen("review.csv", "a");
// Define the row to be appended
$row = [$name, "var"];
// Append the row to the CSV file
fputcsv($csv, $row, escape: "");
// Close the CSV file
fclose($csv);
//extension.phpServer.reloadServer
//PHP Server: Stop project
?>

