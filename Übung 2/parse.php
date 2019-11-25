<?php
function parse()
{
    $file = fopen("world_data.csv", "r");
    print_r(fgetcsv($file));
    fclose($file);
}
