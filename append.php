<?php
// Open the CSV file in append mode
$csv = fopen("review.csv", "a");
// Define the row to be appended
$row = ["Test", "var"];
// Append the row to the CSV file
fputcsv($csv, $row, escape: "");
// Close the CSV file
fclose($csv);
?>