<?php
function parseCSV($path)
{
    $file = fopen($path, "r");
    print_r(fgetcsv($file));
    fclose($file);
}
