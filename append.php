<?php
// Open the CSV file in append mode
$csv = fopen("demo.csv", "a");
// Define the row to be appended
$row = ["A", "B"];
// Append the row to the CSV file
fputcsv($csv, $row);
// Close the CSV file
fclose($csv);
?>