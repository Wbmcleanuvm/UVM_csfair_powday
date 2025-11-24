<?php
/**
 * Reads a CSV file into a 2D array (matrix)
 *
 * @param string $filename  Path to the CSV file
 * @param string $delimiter Field delimiter (default: comma)
 * @return array            2D array of CSV data
 * @throws Exception        If file cannot be opened
 */
function readCsvToMatrix(string $filename, string $delimiter = ','): array {
    // Ensure file exists and is readable
    if (!is_readable($filename)) {
        throw new Exception("File not found or not readable: $filename");
    }

    $matrix = [];
    if (($handle = fopen($filename, 'r')) !== false) {
        while (($row = fgetcsv($handle, 0, $delimiter)) !== false) {
            // Trim whitespace from each cell
            $row = array_map('trim', $row);
            $matrix[] = $row;
        }
        fclose($handle);
    } else {
        throw new Exception("Unable to open file: $filename");
    }

    return $matrix;
}


// Source - https://stackoverflow.com/a
// Posted by Senador, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-24, License - CC BY-SA 4.0

function debug_to_console($data) {
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}

debug_to_console("test");

?>