<?php
header('Content-Type: application/json');

ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);

$response = [];

$action = $_GET['action'] ?? null;
$filename = $_GET['filename'] ?? null;

try {
    switch ($action) {
        case "review":
            if ($filename) {
                $response['message'] = json_encode(readCsvToMatrix($filename));
            } else {
                $response['error'] = "No filename provided.";
            }
            break;
        case "trail":
            if ($filename) {
                $response['message'] = json_encode(readCsvToMatrix($filename));
                
            } else {
                $response['error'] = "No filename provided.";
            }
            break;
        default:
            $response['error'] = "Invalid action.";
            break;
    }
} catch (Exception $e) {
    $response['error'] = $e->getMessage();
}
 
echo json_encode($response);

function readCsvToMatrix(string $filename, string $delimiter = ','): array {
    if (!is_readable($filename)) { 
        throw new Exception("File not found or not readable: $filename");
    }

    $matrix = [];
    if (($handle = fopen($filename, 'r')) !== false) {
        while (($row = fgetcsv($handle, 0, $delimiter)) !== false) {
            $matrix[] = array_map('trim', $row);   
        }
        fclose($handle);
    } else {
        throw new Exception("Unable to open file: $filename");
    }

    return $matrix;
}
?>