<?php

$name = $_POST['fname'];
$rating = $_POST['score'];
$mnt = $filename = $_POST['mnt'];

// Open the CSV file in append mode
$csv = fopen("{$filename}review.csv", "a");
// Define the row to be appended
$row = [$name, $rating, $mnt];
// Append the row to the CSV file
fputcsv($csv, $row, escape: "");
// Close the CSV file
fclose($csv);

//extension.phpServer.reloadServer
// CTRL + SHFT + P:   PHP Server: Stop project
?>

