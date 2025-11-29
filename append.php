<?php

$name = $_POST['fname'];
$rating = $_POST['score'];
$mnt = $filename = $_POST['mnt'];
$trail = $_POST['Trail'];

// Open the CSV file in append mode
$csv = fopen("{$filename}review.csv", "a");
// Define the row to be appended
$row = [$name, $rating, $mnt, $trail];
// Append the row to the CSV file
fputcsv($csv, $row, escape: "");
// Close the CSV file
fclose($csv);


exit(); 


//extension.phpServer.reloadServer
// CTRL + SHFT + P:   PHP Server: Stop project
?>
